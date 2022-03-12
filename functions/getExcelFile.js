const fs = require("fs");
const { constants } = require("buffer");
const xlsx = require("xlsx");
const exceljs = require("exceljs");
const { BACKEND_PATH } = require("../../../shortcut");

const readAllCells = (worksheet, save = false, file_name) => {
  const sheetData = [];

  const options = { includeEmpty: true };

  worksheet.eachRow(options, (row, rowNum) => {
    sheetData[rowNum] = [];
    row.eachCell(options, (cell, cellNum) => {
      sheetData[rowNum][cellNum] = {
        row: rowNum,
        col: cellNum,
        value: cell.value,
        style: cell.style,
      };
      // console.log(cell);
    });
  });

  if (save) {
    fs.writeFileSync(
      file_name.split(".")[0] + ".json",
      JSON.stringify(sheetData, null, "  ")
    );
  }
};

const writeCell = (worksheet, row, col, value) => {
  worksheet.getRow(row).getCell(col).value = value;
};

const rewriteExcelFile = (file_name, new_file_name, callback) => {
  const workbook = new exceljs.Workbook();
  workbook.xlsx.readFile(file_name).then((workbook) => {
    let worksheet = workbook.worksheets[0];
    // readAllCells(worksheet, true, file_name);
    writeCell(worksheet, 14, 9, 0.5);
    writeCell(worksheet, 14, 12, "방가방가유");

    workbook.xlsx.writeFile(new_file_name).then(callback).catch(callback);
  });
};

const getExcelFile = (req, res) => {
  const file_name =
    BACKEND_PATH + "data/excel_format/sample.xlsx";
  const new_file_name =
    BACKEND_PATH + "data/excel_format/sample_output.xlsx";
  rewriteExcelFile(file_name, new_file_name, () => {
    const base_file_data = fs.readFileSync(new_file_name);
    res.send(base_file_data);
  });
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

module.exports = getExcelFile;
