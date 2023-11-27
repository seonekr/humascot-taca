var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const multer = require("multer");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "Humascot-TACA2023";
require("dotenv").config();

app.use(cors());

const mysql = require("mysql2");
// create the connection database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

// For test upload image
app.post("/single", upload.single("image"), (req, res) => {
  const file_src = req.file.filename;

  const sql = "INSERT INTO users_file (file_src) VALUES (?)";
  const value = [file_src];

  connection.query(sql, [value], (err, result) => {
    if (err) {
      res.json({
        Status: "Error",
        Error: err,
      });
      return;
    } else {
      res.json({
        Status: "Success",
        Success: result,
      });
      return;
    }
  });
});
app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Multiple File upload success");
});

// ==================== Authentication and Authenticate user =====================
app.post("/login", jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sql = "SELECT * FROM register WHERE email = ?";
  connection.query(sql, [email], (err, result) => {
    if (err) {
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    }
    if (result.length > 0) {
      bcrypt.compare(
        password.toString(),
        result[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Password error" });
          if (response) {
            if (result[0].urole === "Admin") {
              const token = jwt.sign(
                { email: result[0].email, urole: "Admin" },
                secret,
                {
                  expiresIn: "1d",
                }
              );
              return res.json({
                Status: "Success",
                urole: "Admin",
                userID: result[0].id,
                token: token,
              });
            } else {
              const token = jwt.sign(
                { email: result[0].email, urole: "Customer" },
                secret,
                {
                  expiresIn: "1d",
                }
              );
              return res.json({
                Status: "Success",
                urole: "Customer",
                userID: result[0].id,
                token: token,
              });
            }
          } else {
            return res.json({
              Status: "Error",
              Error: "Wrong Password",
            });
          }
        }
      );
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
});

app.post("/authen", jsonParser, (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ Status: "Success", decoded });
  } catch (err) {
    res.json({ Status: "Error", Error: err.message });
  }
});

// ==================== Customer Management =====================
app.post("/register", jsonParser, (req, res) => {
  const email = req.body.email;
  const urole = "Customer";
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  var reg_id = "";
  const fname = req.body.fname;
  const lname = req.body.lname;
  const tel = req.body.tel;
  const profile_image = "profile.png";

  if (
    fname !== "" &&
    lname !== "" &&
    email !== "" &&
    tel !== "" &&
    password !== "" &&
    confirmPassword !== ""
  ) {
    if (password === confirmPassword) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        const sql1 =
          "INSERT INTO register (email, tel, urole, password) VALUES (?)";
        const values1 = [email, tel, urole, hash];

        connection.query(sql1, [values1], (err, result) => {
          if (err) {
            res.json({
              Status: "Error",
              Error: err,
            });
            return;
          } else {
            // For select last user id
            const sql = "SELECT * FROM register ORDER BY id DESC LIMIT 1";
            connection.query(sql, (err, result) => {
              if (err)
                return res.json({
                  Status: "Error",
                  Error: err,
                });
              reg_id = result[0].id;

              // For add Customer
              const sql2 =
                "INSERT INTO customers (reg_id, email, fname, lname, tel, profile_image) VALUES (?)";
              const values2 = [reg_id, email, fname, lname, tel, profile_image];
              connection.query(sql2, [values2], (err, result) => {
                if (err) {
                  res.json({
                    Status: "Error",
                    Error: err,
                  });

                  // For delete the last register id when customers adding wrong
                  const sql3 = "DELETE FROM register WHERE id = ?";

                  connection.query(sql3, [reg_id], (err, result) => {
                    if (err)
                      return res.json({
                        Status: "Error",
                        Error: err,
                      });
                  });
                  return;
                } else {
                  res.json({ Status: "Success" });
                }
              });
            });
          }
        });
      });
    } else {
      res.json({
        Status: "Error",
        Error: "The Password doesn't match!",
      });
      return;
    }
  } else {
    res.json({
      Status: "Error",
      Error: "Please fill all the blank!",
    });
    return;
  }
});

app.get("/allCustomers", (req, res) => {
  const sql = "SELECT * FROM customers";
  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    else {
      return res.json({ Status: "Success", Result: result });
    }
  });
});

app.get("/getCustomer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM customers WHERE reg_id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.put("/updateCustomer/:id", jsonParser, (req, res) => {
  const id = req.params.id;

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const sql =
      "UPDATE customers SET `email` = ?, `tel` = ?, `fname` = ?, `lname` = ?, `password` = ? WHERE id = ?";

    const values = [
      req.body.email,
      req.body.tel,
      req.body.fname,
      req.body.lname,
      hash,
    ];

    connection.query(sql, [...values, id], (err, data) => {
      if (err) res.json({ Status: "Error", Error: "Errer in running sql" });
      return res.json({ Status: "Success", data });
    });
  });
});

app.get("/deleteCustomer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM register WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success" });
  });
});

app.get("/countCustomer", (req, res) => {
  const sql = "SELECT count(id) as customers FROM customers";

  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ result });
  });
});

// ==================== Admin Management =====================
app.post("/admin/register", jsonParser, (req, res) => {
  const email = req.body.email;
  const urole = "Admin";
  const password = email;
  var reg_id = "";
  const fname = req.body.fname;
  const lname = req.body.lname;
  const tel = req.body.tel;
  const profile_image = "profile.png";

  if (fname !== "" && lname !== "" && email !== "" && tel !== "") {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      // For add register
      const sql1 =
        "INSERT INTO register (email, tel, urole, password) VALUES (?)";
      const values1 = [email, tel, urole, hash];

      connection.query(sql1, [values1], (err, result) => {
        if (err) {
          res.json({
            Status: "Error",
            Error: err,
          });
          return;
        } else {
          // For select last user id
          const sql = "SELECT * FROM register ORDER BY id DESC LIMIT 1";
          connection.query(sql, (err, result) => {
            if (err)
              return res.json({
                Status: "Error",
                Error: err,
              });
            reg_id = result[0].id;

            // For add admins
            const sql2 =
              "INSERT INTO admins (reg_id, email, fname, lname, tel, profile_image) VALUES (?)";
            const values2 = [reg_id, email, fname, lname, tel, profile_image];
            connection.query(sql2, [values2], (err, result) => {
              if (err) {
                res.json({
                  Status: "Error",
                  Error: err,
                });

                // For delete the last register id when customers adding wrong
                const sql3 = "DELETE FROM register WHERE id = ?";

                connection.query(sql3, [reg_id], (err, result) => {
                  if (err)
                    return res.json({
                      Status: "Error",
                      Error: err,
                    });
                });
                return;
              } else {
                res.json({ Status: "Success" });
              }
            });
          });
        }
      });
    });
  } else {
    res.json({
      Status: "Error",
      Error: "Please fill all the blank!",
    });
    return;
  }
});

app.get("/allAdmins", (req, res) => {
  const sql = "SELECT * FROM admins";
  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running query" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.get("/getAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM admins WHERE reg_id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running query" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.put("/updateAdmin/:id", jsonParser, (req, res) => {
  const id = req.params.id;
  const email = req.body.email;
  const tel = req.body.tel;
  const fname = req.body.fname;
  const lname = req.body.lname;
  // const profile_image = req.body.profile_image;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    const sql1 =
      "UPDATE register SET `email` = ?, `tel` = ?, `password` = ? WHERE id = ?";
    const sql2 =
      "UPDATE admins SET `email` = ?, `tel` = ?, `fname` = ?, `lname` = ? WHERE reg_id = ?";

    const values1 = [email, tel, hash];
    const values2 = [email, tel, fname, lname];

    connection.query(sql1, [...values1, id], (err, data) => {
      if (err) {
        res.json({ Status: "Error", Error: err });
        return;
      } else {
        // For add admins
        connection.query(sql2, [...values2, id], (err, data) => {
          if (err) {
            res.json({
              Status: "Error",
              Error: err,
            });
            return;
          } else {
            res.json({ Status: "Success" });
            return;
          }
        });
      }
    });
  });
});

app.get("/deleteAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM register WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success" });
  });
});

app.get("/countAdmin", (req, res) => {
  const sql = "SELECT count(id) as admins FROM admins";

  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ result });
  });
});

// ==================== Product Management =====================
app.post("/addProduct", upload.single("image"), jsonParser, (req, res) => {
  const sql =
    "INSERT INTO products (category, name, price, color, description, is_popular) VALUES (?)";
  const values = [
    req.body.category,
    req.body.name,
    req.body.price,
    req.body.color,
    req.body.description,
    req.body.is_popular,
    // req.file.filename,
    // req.body.gallery,
  ];
  connection.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: err,
      });
    }
    return res.json({ Status: "Success" });
  });
});

app.get("/allProducts", (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: err,
      });
    return res.json({ Status: "Success", Result: result });
  });
});

app.get("/getProduct/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM products WHERE id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success", Result: result });
  });
});

app.put("/updateProduct/:id", jsonParser, (req, res) => {
  const id = req.params.id;

  const sql =
    "UPDATE products SET `cat_id` = ?, `name` = ?, `price` = ?, `size` = ?, `color` = ?, `descriptions` = ?, `image` = ? WHERE id = ?";

  const values = [
    req.body.cat_id,
    req.body.name,
    req.body.price,
    req.body.size,
    req.body.color,
    req.body.descriptions,
    req.body.image,
  ];

  connection.query(sql, [...values, id], (err, data) => {
    if (err) res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ Status: "Success", data });
  });
});

app.get("/deleteProduct/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM products WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success" });
  });
});

app.get("/countProduct", (req, res) => {
  const sql = "SELECT count(id) as products FROM products";

  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ result });
  });
});

// ============== Test API ===============
app.get("/lastUser", (req, res) => {
  const sql = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running query" });

    return res.json({ Status: "Success", Result: result[0].id });
  });
});



// ==================== Cart Management =====================
app.post("/addToCart", jsonParser, (req, res) => {
  const sql =
    "INSERT INTO carts (product_id, customer_id, size, color, quantity) VALUES (?)";
  const values = [
    req.body.product_id,
    req.body.customer_id,
    req.body.size,
    req.body.color,
    req.body.quantity,
  ];
  connection.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    }
    return res.json({ Status: "Success" });
  });
});

app.get("/getProductsInCart/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM carts WHERE customer_id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success", Result: result });
  });
});

app.get("/deleteProductInCart/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM carts WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Errer in running sql",
      });
    return res.json({ Status: "Success" });
  });
});

app.get("/countProduct", (req, res) => {
  const sql = "SELECT count(id) as products FROM products";

  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Errer in running sql" });
    return res.json({ result });
  });
});

app.listen(5000, () => {
  console.log("Web server listening on port 5000");
});