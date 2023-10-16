var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "Humascot-TACA-@2023";

app.use(cors());

const mysql = require("mysql2");
// create the connection database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "taca_db",
});

// ==================== Admin Management =====================
app.post("/registerAdmin", jsonParser, (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    connection.execute(
      "INSERT INTO admins (email, tel, fname, lname, department, password) VALUES (?,?,?,?,?,?)",
      [
        req.body.email,
        req.body.tel,
        req.body.fname,
        req.body.lname,
        req.body.department,
        hash,
      ],
      (err, result, fields) => {
        if (err) {
          res.json({ Status: "Error", Message: err });
          return;
        } else {
          res.json({ Status: "Success" });
        }
      }
    );
  });
});

app.post("/loginAdmin", jsonParser, (req, res) => {
  connection.execute(
    "SELECT * FROM admins WHERE email=?",
    [req.body.email],
    (err, users, fields) => {
      if (err) {
        res.json({ Status: "Error", Message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ Status: "Error", Message: "No user found" });
        return;
      }
      bcrypt.compare(req.body.password, users[0].password, (err, isLogin) => {
        if (isLogin) {
          var token = jwt.sign({ email: users[0].email }, secret, {
            expiresIn: "1h",
          });
          res.json({ Status: "Success", Message: "Login success", token });
        } else {
          res.json({ Status: "Error", Message: "Login failed" });
        }
      });
    }
  );
});

app.post("/authenAdmin", jsonParser, (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ Status: "Success", decoded });
  } catch (err) {
    res.json({ Status: "Error", Message: err.message });
  }
});

app.get("/getAdmins", (req, res) => {
  const sql = "SELECT * FROM admins";
  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Message: "Get admin error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.get("/getAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM admins WHERE id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({ Status: "Error", Message: "Get admin error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.put("/updateAdmin/:id", jsonParser, (req, res) => {
  const userID = req.params.id;

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const sql =
      "UPDATE admins SET `email` = ?, `tel` = ?, `fname` = ?, `lname` = ?, `department` = ?, `password` = ? WHERE id = ?";

    const values = [
      req.body.email,
      req.body.tel,
      req.body.fname,
      req.body.lname,
      req.body.department,
      hash,
    ];

    connection.query(sql, [...values, userID], (err, data) => {
      if (err) res.json({ Status: "Error", Message: "Update Error!" });
      return res.json(data);
    });
  });
});

app.get("/deleteAdmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM admins WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Message: "Delete admin error in sql",
      });
    return res.json({ Status: "Success" });
  });
});

app.get("/countAdmin", (req, res) => {
  const sql = "SELECT count(id) as admins FROM admins";

  connection.query(sql, (err, result) => {
    if (err)
      return res.json({ Status: "Error", Message: "Errer in running sql" });
    return res.json({ result });
  });
});

// ==================== Customer Management =====================

// app.post("/register2", jsonParser, (req, res) => {
//   bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
//     connection.execute(
//       "INSERT INTO customers (email, tel, fname, lname, password) VALUES (?,?,?,?,?)",
//       [req.body.email, req.body.tel, req.body.fname, req.body.lname, hash],
//       (err, result, fields) => {
//         if (err) {
//           res.json({ Status: "Error", Message: err });
//           return;
//         } else {
//           res.json({ Status: "Success" });
//         }
//       }
//     );
//   });
// });

app.post("/register", jsonParser, (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const sql =
      "INSERT INTO customers (email, tel, fname, lname, password) VALUES (?)";
    const values = [
      req.body.email,
      req.body.tel,
      req.body.fname,
      req.body.lname,
      hash,
    ];
    connection.query(sql, [values], (err, result) => {
      if (err) {
        return res.json({
          Status: "Error",
          Message: "Errer in hashing password",
        });
      }
      return res.json({ Status: "Success" });
    });
  });
});

app.post("/login", jsonParser, (req, res) => {
  const sql = "SELECT * FROM customers WHERE email = ?";
  connection.query(sql, [req.body.email], (err, result) => {
    if (err) {
      return res.json({ Status: "Error", Message: "Errer in running query" });
    }
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        result[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Password error" });
          if (response) {
            const token = jwt.sign({ email: result[0].email }, secret, {
              expiresIn: "1d",
            });
            return res.json({ Status: "Success", Token: token });
          } else {
            return res.json({
              Status: "Error",
              Error: "Wrong Password",
            });
          }
        }
      );
    } else {
      return res.json({ Status: "Error", Message: "Wrong Email or Password" });
    }
  });
});

app.listen(3001, () => {
  console.log("CORS-enabled web server listening on port 3333");
});
