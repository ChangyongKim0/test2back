const fs = require("fs");
const { constants } = require("buffer");

const getMapInfoData = (req, res) => {
  const min_lat_code = Math.floor(req.body.min_lat * 400);
  const min_lng_code = Math.floor(req.body.min_lng * 400);
  const max_lat_code = Math.floor(req.body.max_lat * 400);
  const max_lng_code = Math.floor(req.body.max_lng * 400);
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
        map_data.map((e) => new_data.push(e));
        //   console.log(new_data);
      } catch (err) {
        // console.log(file_name);
      }
    }
  }
  res.send(new_data);
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
