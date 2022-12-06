import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

import { definitions } from "../../types/supabase";
import schools from "../../data/schools_with_location.json";

dotenv.config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.error(
    '[error]: The "NEXT_PUBLIC_SUPABASE_URL" environment variable is required'
  );
  process.exit(1);
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  console.error(
    '[error]: The "SUPABASE_SERVICE_KEY" environment variable is required'
  );
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

(async function supabaseSeed() {
  for (const school of schools) {
    const result = await supabase
      // @ts-ignore
      .from<definitions["schools"]>("schools")
      .insert({
        strapi_id: school.id,
        name: school.name.school,
        owner: school.name.owner,
        phone: school.contact.phone,
        mobile: school.contact.mobilePhone,
        email: school.contact.email,
        web: school.contact.web,
        street: school.address.street,
        zip: school.address.zip,
        town: school.address.town,
        state: school.address.state,
        country: school.address.country,
        latitude: school.location.lat,
        longitude: school.location.lng,
        geolocation: `SRID=4326;POINT(${school.location.lat} ${school.location.lng})`,
      });

    console.log(result);
  }
})();
