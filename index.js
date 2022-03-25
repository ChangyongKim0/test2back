var bodyParser = require("body-parser");
var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
const handleCookieData = require("./functions/handleCookieData");
const getBldgInfoData = require("./functions/getBldgInfoData");
const getMapInfoData = require("./functions/getMapInfoData");
const getExcelFile = require("./functions/getExcelFile");
const axios = require("axios");
const mysql_option = {
  host: "localhost",
  user: "server",
  password: "server123!",
  database: "propi",
  connectionLimit: 100,
};

var app = express();
const PORT = process.env.PORT || 3001;

// app.opts

// app.use(cors({
//     origins: ['https://api.propi.moohae.net', 'https://propi.moohae.net'],   // defaults to ['*']
//     credentials: true,                 // defaults to false
//     // headers: ['x-foo']                 // sets expose-headers
// }));

app.use(cors({
    origins: ['https://propi.moohae.net']
}));

const port = 3001;
app.set("port", port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res)=> {
  res.send("server testing ok");
  console.log("server testing ok");
});

app.get("/api", function (req, res) {
  console.log("Hello World!");
  res.send("Hello World!");
  console.log("CTA button is clicked!");
});

const _h = (url) => {
  axios.get(url).then((res) => {
    console.log(res)
  }).catch(res => {
    console.log(res);
  })
  return handleCookieData("put");
}

app.put("/api/urlInfo", (req, res) => {
  axios.get(req.body.url).then((url_res) => {
    console.log("successfully get url data");
    const data = {};
    for (output in url_res){
            console.log("노드 값: "+JSON.stringify(output));
            data[output] = url_res[output]
            // output == "data"? "": console.log(url_res[output]);
    }
    res.send({
      // "status": url_res.status,
      // "statusText": url_res.statusText,
      // "headers0": url_res.headers,
      // "config": url_res.config,
      // "request": url_res.request,
      "data": url_res.data,
    });
  })
  // .catch(err => {
  //   console.log("error occured while getting url data");
  //   console.log(err);
  //   res.send({"err": err});
  // });
})

app.put("/api/cookie", handleCookieData("put"));

app.patch("/api/cookie", handleCookieData("patch"));

app.patch("/api/cookie/add", handleCookieData("add"));

app.patch("/api/cookie/delete", handleCookieData("delete"));

app.put("/api/bldgInfo", getBldgInfoData);

app.put("/api/mapInfo", getMapInfoData);

app.get("/api/downloadExcel", getExcelFile);

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
