var bodyParser = require("body-parser");
var express = require("express");
var mysql = require("mysql");
const handleCookieData = require("./functions/handleCookieData");
const getBldgInfoData = require("./functions/getBldgInfoData");
const getMapInfoData = require("./functions/getMapInfoData");
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

app.put("/api/cookie", handleCookieData("put"));

app.patch("/api/cookie", handleCookieData("patch"));

app.put("/api/bldgInfo", getBldgInfoData);

app.put("/api/mapInfo", getMapInfoData);

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
