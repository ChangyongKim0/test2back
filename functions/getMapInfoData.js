const fs = require("fs");
const { constants } = require("buffer");

const getMapInfoData = (req, res) => {
  const min_lat_code = Math.floor(req.body.min_lat * 400);
  const min_lng_code = Math.floor(req.body.min_lng * 400);
  const max_lat_code = Math.floor(req.body.max_lat * 400);
  const max_lng_code = Math.floor(req.body.max_lng * 400);
  if (max_lng_code - min_lng_code > 10 || max_lat_code - min_lat_code > 10) {
    res.send({ code_list: [], data: [] });
  } else {
    let code_list = [];
    let new_data = [];
    let lat_code, lng_code;
    for (
      lng_code = min_lng_code * 1 - 1;
      lng_code <= max_lng_code * 1;
      lng_code++
    ) {
      for (
        lat_code = min_lat_code * 1 - 1;
        lat_code <= max_lat_code * 1;
        lat_code++
      ) {
        const file_name =
          "/home/server/workspace/python/background_algorithms/data/map_data/" +
          lng_code +
          "/" +
          lat_code +
          ".json";
        try {
          const map_data = JSON.parse(fs.readFileSync(file_name));
          map_data.map((e) =>
            new_data.push({
              ...e,
              latlng: String(lng_code) + String(lat_code),
            })
          );
          code_list.push(String(lng_code) + String(lat_code));
          //   console.log(new_data);
        } catch (err) {
          // console.log(file_name);
        }
      }
    }
    res.send({ code_list: code_list, data: new_data });
  }
};

// getMapInfoData(
//   {
//     body: {
//       min_lng: 126.9125,
//       min_lat: 37.525,
//       max_lng: 126.915,
//       max_lat: 37.5275,
//     },
//   },
//   {
//     send: (req) => {
//       console.log(req);
//     },
//   }
// );

module.exports = getMapInfoData;
