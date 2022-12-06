import { StaticImageData } from "next/image";

import berlin from "../public/berlin.webp";
import hamburg from "../public/hamburg.webp";
import koeln from "../public/koeln.webp";
import muenchen from "../public/muenchen.webp";
import frankfurt from "../public/frankfurt.webp";

type City = {
  name: string;
  href: string;
  imageSrc: StaticImageData;
  altUrl: string;
};

export const cities: City[] = [
  {
    name: "Berlin",
    href: "hundeschule-berlin",
    imageSrc: berlin,
    altUrl: "hundeschule-berlin",
  },
  {
    name: "Hamburg",
    href: "hundeschule-hamburg",
    imageSrc: hamburg,
    altUrl: "hundeschule-hamburg",
  },
  {
    name: "München",
    href: "hundeschule-muenchen",
    imageSrc: muenchen,
    altUrl: "hundeschule-muenchen",
  },
  {
    name: "Köln",
    href: "hundeschule-koeln",
    imageSrc: koeln,
    altUrl: "hundeschule-koeln",
  },
  {
    name: "Frankfurt",
    href: "hundeschule-frankfurt",
    imageSrc: frankfurt,
    altUrl: "hundeschule-finden?zip=60311",
  },
];
