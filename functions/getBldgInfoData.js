const fs = require("fs");
const convertBldgApiData = require("./convertBldgApiData");
const convertLandApiData = require("./convertLandApiData");
const convertTrApiData = require("./convertTrApiData");
const sigungu_code = JSON.parse(
  fs.readFileSync(
    "/home/server/workspace/python/background_algorithms/configs/sigungu_code.json"
  )
);

const loadDistributedData = (type, id, lng_code, lat_code) => {
  const data_path = "/home/server/workspace/python/background_algorithms/data/";
  const file_path =
    data_path + type + "_data/dist/" + lng_code + "/" + lat_code + ".json";
  let data = {};
  try {
    data = JSON.parse(fs.readFileSync(file_path)).filter((e) => e.id == id);
    return data[0] || -1;
  } catch {
    return -1;
  }
};

const convertData = (type, data) => {
  if (data == -1) {
    return [false, {}];
  }
  switch (type) {
    case "bldg":
      return [true, convertBldgApiData(data)];
    case "land":
      return [true, convertLandApiData(data)];
    case "tr":
      return [true, convertTrApiData(data)];
    default:
  }
};

const getAddr = (pnu) => {
  const sgg = sigungu_code["from_code"][pnu.slice(0, 10)];
  return (
    sgg +
    " " +
    parseInt(pnu.slice(11, 15)) +
    (pnu.slice(15) == "0000" ? "" : "-" + parseInt(pnu.slice(15)))
  );
};

const getBldgInfoData = (req, res) => {
  const id = req.body.id;
  console.log(req.body.id);
  const lng_code = req.body.latlng.slice(0, 5);
  const lat_code = req.body.latlng.slice(5);
  const [_, land_data] = convertData(
    "land",
    loadDistributedData("land", id, lng_code, lat_code)
  );
  //   const bldg_data = loadDistributedData("bldg", id, lng_code, lat_code);
  const [bldg_exists, bldg_data] = convertData(
    "bldg",
    loadDistributedData("bldg", id, lng_code, lat_code)
  );
  const tr_data = loadDistributedData("transaction", id, lng_code, lat_code);
  //   console.log(land_data);
  //   console.log(bldg_data);
  //   console.log(tr_data);
  res.send({
    addr: getAddr(id),
    bldg_idx: 0,
    land: land_data,
    bldg: bldg_data,
    transaction: tr_data,
    bldg_exists: bldg_exists,
    transaction_exists: false,
  });
};

module.exports = getBldgInfoData;
