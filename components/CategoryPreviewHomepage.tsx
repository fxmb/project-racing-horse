import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const categories = [
  {
    name: "Leitungsverbinder",
    numberOfArticles: "15.170",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/1_leitungsverbinder.jpg",
  },
  {
    name: "Gewindefittings",
    numberOfArticles: "2.003",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/2_gewindefittings.jpg",
  },
  {
    name: "Kupplungen",
    numberOfArticles: "2.300",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/3_kupplungstechnik.jpg",
  },
  {
    name: "Schläuche - Rohren - Schellen",
    numberOfArticles: "200",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/4_schlaeuche.jpg",
  },
  {
    name: "Leitungsverbinder",
    numberOfArticles: "15.170",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/1_leitungsverbinder.jpg",
  },
  {
    name: "Gewindefittings",
    numberOfArticles: "2.003",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/2_gewindefittings.jpg",
  },
  {
    name: "Kupplungen",
    numberOfArticles: "2.300",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/3_kupplungstechnik.jpg",
  },
  {
    name: "Schläuche - Rohren - Schellen",
    numberOfArticles: "200",
    href: "#",
    imageSrc:
      "https://www.landefeld.de/shop/media/kapitelbilder-startseite/4_schlaeuche.jpg",
  },
];

export default function CategoryPreviewHomepage() {
  return (
    <div className="pt-12">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
        {categories.map((category, idx) => (
          <Link href="#" key={idx} className="flex flex-col ">
            <div className=" bg-white flex items-center justify-center ">
              <img
                src={category.imageSrc}
                alt="tbd"
                className="hover:scale-90 transition duration-300 scale-75 bg-white object-center object-cover"
              />
            </div>

            <h3 className="text-indigo-500 font-semibold lg:text-lg mt-2">
              {category.name}
            </h3>
            <span className="text-gray-900 font-light text-xs lg:text-sm mt-1">
              {category.numberOfArticles} Artikel
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
