const fs = require("fs");
const { constants } = require("buffer");

const _patchCookieData = (req, res) => {
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
      cookie_data[key].push(setting[key]);
    } else {
      cookie_data[key] = setting[key];
    }
  });
  fs.writeFileSync(file_name, JSON.stringify(cookie_data, null, "  "));
  console.log("cookie data patched.");
  res.end();
};

const _addCookieData = (req, res) => {
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
    if (cookie_data.data[key] == undefined) {
      cookie_data.data[key] = [];
    }
    cookie_data.data[key].push(data[key]);
  });
  Object.keys(setting).map((key) => {
    if (cookie_data.setting[key] == undefined) {
      cookie_data[key] = [];
    }
    cookie_data[key].push(setting[key]);
  });
  fs.writeFileSync(file_name, JSON.stringify(cookie_data, null, "  "));
  console.log("cookie data addeded.");
  res.end();
};

const _deleteCookieData = (req, res) => {
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
    if (cookie_data.data[key] != undefined) {
      cookie_data.data[key].filter((e) => e.id != data[key]);
    }
  });
  Object.keys(setting).map((key) => {
    if (cookie_data.setting[key] != undefined) {
      cookie_data.setting[key].filter((e) => e.id != setting[key]);
    }
  });
  fs.writeFileSync(file_name, JSON.stringify(cookie_data, null, "  "));
  console.log("cookie data deleted.");
  res.end();
};

const _putCookieData = (req, res) => {
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
    res.send({ id: cookie_data.id, data: cookie_data.data });
    console.log("cookie data loaded.");
  });
};

const handleCookieData = (type) => {
  switch (type) {
    case "patch":
      return _patchCookieData;
    case "put":
      return _putCookieData;
    case "add":
      return _addCookieData;
    case "delete":
      return _deleteCookieData;
    case "default":
      return () => {};
  }
};

module.exports = handleCookieData;
