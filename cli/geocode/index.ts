import fs from "fs";
import * as dotenv from "dotenv";
import axios from "axios";

import schools from "../../data/dog_schools_with_emails.json";

dotenv.config({ path: ".env.local" });

(async function geocodeAddress() {
  let count = 1;
  try {
    const schoolsWithLocation = [];
    for (const school of schools) {
      console.log(count);
      const response = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          `${school.address.street} ${school.address.zip} ${school.address.town} ${school.address.country}`
        )}&key=${process.env.GOOGLE_API_KEY}`
      );
      const [place] = response.data.results;
      const schoolWithLocation = {
        ...school,
        location: place.geometry.location,
      };
      console.log(schoolWithLocation);
      schoolsWithLocation.push(schoolWithLocation);
      count++;
    }
    fs.writeFile(
      `${process.cwd()}/data/schools_with_location.json`,
      JSON.stringify(schoolsWithLocation),
      (err) => {
        console.log("Error: ", err);
      }
    );
  } catch (e) {
    console.log("Error: ", e);
  }
})();
