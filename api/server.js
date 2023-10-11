var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "Fullstack-Login-2023";

app.use(cors());

const mysql = require("mysql2");
// create the connection database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "taca_db",
});

app.post("/register", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO admins (email, tel, fname, lname, department, password) VALUES (?,?,?,?,?,?)",
      [req.body.email, req.body.tel, req.body.fname, req.body.lname, req.body.department, hash],
      function (err, result, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        } else {
          res.json({ status: "success" });
        }
      }
    );
  });
});

app.post("/login", jsonParser, function (req, res, next) { 
  connection.execute(
    "SELECT * FROM admins WHERE email=?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ email: users[0].email }, secret, {
              expiresIn: "1h",
            });
            res.json({ status: "success", message: "login success", token });
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
});

app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded }); 
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});

app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});