import type { NextApiRequest, NextApiResponse } from "next";
import zipGeolocations from "../../data/zip/DE.json";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

import { School } from "../../types";

type SchoolsResponse = {
  city: string;
  location: { lat: number; lng: number };
  schools: School[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SchoolsResponse | Error>
) {
  const zipCode = req.query.zip;

  if (!zipCode || Array.isArray(zipCode)) {
    return res.status(400).json({
      name: "Missing Zip",
      message: "Please provide a zip query parameter.",
    });
  }

  if (!/^[0-9]{5}$/.test(zipCode)) {
    return res.status(400).json({
      name: "Invalid Zip",
      message: "Please provide a valid zip query parameter.",
    });
  }

  // @ts-ignore
  const location = zipGeolocations[zipCode];

  const result = await supabaseAdmin.rpc("find_schools", {
    radius: 20000,
    point: `SRID=4326;POINT(${location.lat} ${location.lng})`,
  });

  if (result.error || !result.data) {
    return res.status(500).json({
      name: "Failed to fetch",
      message: "Failed to fetch schools, please try again later.",
    });
  }

  const city = location.city;
  return res.status(200).json({
    city,
    location,
    schools: result.data.sort((a, b) => a.distance - b.distance),
  });
}
