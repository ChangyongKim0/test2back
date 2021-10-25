const fs = require("fs");

var bodyParser = require("body-parser");
var express = require("express");
var mysql = require("mysql");
const { constants } = require("buffer");
const mysql_option = {
  host: "localhost",
  user: "server",
  password: "server123!",
  database: "propi",
  connectionLimit: 100,
};

var app = express();
const port = 3001;
app.set("port", port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", function (req, res) {
  console.log("Hello World!");
  res.send("Hello World!");
  console.log("CTA button is clicked!");
});

app.put("/api/cookie", (req, res) => {
  let id = req.body.id;
  const file_name = "data/cookie_data/" + id + ".json";
  fs.access(file_name, constants.F_OK, (err) => {
    if (err) {
      fs.writeFileSync(
        file_name,
        JSON.stringify({ id: id, data: {}, history: [] }, null, "  ")
      );
      console.log("cookie data created.");
    } else {
      console.log("cookie data already created.");
    }
    const cookie_data = JSON.parse(fs.readFileSync(file_name));
    res.send(cookie_data);
    console.log("cookie data loaded.");
  });
});

app.patch("/api/cookie", (req, res) => {
  let id = req.body.id;
  let data = req.body.data || {};
  let setting = req.body.setting || {};
  const file_name = "data/cookie_data/" + id + ".json";
  fs.access(file_name, constants.F_OK, (err) => {
    if (err) {
      fs.writeFileSync(
        file_name,
        JSON.stringify({ id: id, data: {}, history: [] }, null, "  ")
      );
      console.log("cookie data created.");
    }
  });
  let cookie_data = JSON.parse(fs.readFileSync(file_name));
  Object.keys(data).map((key) => {
    if (Array.isArray(cookie_data.data[key])) {
      cookie_data.data[key].push(data[key]);
    } else {
      cookie_data.data[key] = data[key];
    }
  });
  Object.keys(setting).map((key) => {
    if (Array.isArray(cookie_data[key])) {
      cookie_data[key].push(data[key]);
    } else {
      cookie_data[key] = data[key];
    }
  });
  fs.writeFileSync(file_name, JSON.stringify(cookie_data, null, "  "));
  console.log("cookie data patched.");
  res.end();
});

app.put("/api/login", function (req, res) {
  console.log(req.body.id);
  console.log(req.body.pwd);
  res.send("Hello World!");
});

app.put("/api/cta", (req, res) => {
  console.log("CTA button is clicked: " + req.body.id);
});

app.get("/api/test", function (req, res) {
  const pool = mysql.createPool(mysql_option);
  pool.getConnection((con_error, con) => {
    if (con_error) throw con_error;
    con.query("SELECT lat_code, lng_code from land_data", (error, rows) => {
      con.release();
      if (error) throw error;
      res.send(rows);
    });
  });
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
