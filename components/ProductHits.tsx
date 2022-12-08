import Link from "next/link";
import { type } from "os";
import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";
import { Product } from "../types";

export default function ProductHits(props: UseHitsProps) {
  const { hits } = useHits(props);

  console.log(hits);
  return (
    <div className=" bg-blue-50 grid gap-4 overflow-auto w-full lg:max-w-xl mx-auto p-2 md:p-4 ">
      {hits.map((hit: any, idx) => (
        <Link
          key={idx}
          href="#"
          className="flex items-center pr-2 bg-white shadow rounded hover:shadow-indigo-500 transition duration-150
           "
        >
          <img
            src={`https://res.cloudinary.com/do43c888y/festo/${hit.mime_info.mime[0].mime_source}`}
            alt=""
            className="h-16 w-24 object-cover object-center mr-2"
          />
          <div className="grid grid-cols-6 w-full gap-x-3">
            <div className="flex flex-col items-start col-span-4 md:col-span-3 ">
              <span className="text-xs text-gray-600">Artikelbezeichnung</span>
              <span className="text-sm text-gray-900 font-medium truncate w-full">
                {hit.product_details.description_short}
              </span>
            </div>
            <div className="flex flex-col items-start col-span-1 md:col-span-2">
              <span className="text-xs text-gray-600">Artikelnummer</span>
              <span className="text-sm text-gray-900 font-medium">
                {hit.product_details.manufacturer_pid}
              </span>
            </div>
            <div className="hidden md:flex flex-col items-start col-span-1">
              <span className="text-xs text-gray-600">Preis</span>
              <span className="text-sm text-gray-900 font-medium">
                {hit.product_price_details.product_price.price_amount}€
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
