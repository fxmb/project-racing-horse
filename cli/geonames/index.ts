import fs from "fs";
import * as Papa from "papaparse";

(async function getZipAndGeolocation() {
  let data = {};
  const readStream = fs.createReadStream(`${__dirname}/DE.csv`, "utf8");
  Papa.parse(readStream, {
    header: true,
    step: function (row) {
      // @ts-ignore
      data[row.data.Zip] = {
        // @ts-ignore
        lat: row.data.Latitude,
        // @ts-ignore
        lng: row.data.Longitude,
      };
    },
    complete: function () {
      fs.writeFile(
        `${process.cwd()}/data/zip.json`,
        JSON.stringify(data),
        (err) => {
          console.log("Error: ", err);
        }
      );
    },
  });
})();
