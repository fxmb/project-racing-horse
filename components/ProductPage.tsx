import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PaperClipIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Breadcrumb from "./Breadcrumb";

const product = {
  "@mode": "new",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://www.landefeld.de/shop/media/festo/produkte/d15000100118885.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  SUPPLIER_PID: [
    {
      "@type": "supplier_specific",
      "#text": "2021",
    },
    {
      "@type": "ean",
      "#text": "4052568017866",
    },
  ],
  PRODUCT_DETAILS: {
    DESCRIPTION_SHORT: "C-1/8-P-6 Schlauchtülle",
    DESCRIPTION_LONG:
      "Schlauchtülle C-1/8-P-6 Nennweite=4 mm, Betriebsmedium=Druckluft nach ISO 8573-1:2010 [7:-:-], Hinweis zum Betriebs- und Steuermedium=Geölter Betrieb möglich (im weiteren Betrieb erforderlich), Pneumatischer Anschluss 1=Innengewinde G1/8, Pneumatischer Anschluss 2=für Schlauch Außendurchmesser 8 mm",
    MANUFACTURER_PID: "2021",
    MANUFACTURER_NAME: "Festo Vertrieb GmbH & Co. KG",
    MANUFACTURER_TYPE_DESCR: "C-1/8-P-6",
    DELIVERY_TIME: "21",
    KEYWORD: ["C-1/8-P-6", "Schlauchtülle"],
    PRODUCT_STATUS: {
      "@type": "new",
      "#text": "N",
    },
  },
  PRODUCT_FEATURES: [
    {
      REFERENCE_FEATURE_SYSTEM_NAME: "ECLASS-9.0",
      REFERENCE_FEATURE_GROUP_ID: "27294201",
    },
    {
      REFERENCE_FEATURE_SYSTEM_NAME: "udf_Festo-2012.1",
      REFERENCE_FEATURE_GROUP_NAME: "Festo",
      FEATURE: [
        {
          FNAME: "Nennweite",
          FVALUE: "4",
          FUNIT: "mm",
          FORDER: "30001",
          FVALUE_TYPE: "SET",
        },
        {
          FNAME: "Betriebsmedium",
          FVALUE: "Druckluft nach ISO 8573-1:2010 [7:-:-]",
          FORDER: "310035",
          FVALUE_TYPE: "SET",
        },
        {
          FNAME: "Hinweis zum Betriebs- und Steuermedium",
          FVALUE: "Geölter Betrieb möglich (im weiteren Betrieb erforderlich)",
          FORDER: "320003",
          FVALUE_TYPE: "SET",
        },
        {
          FNAME: "Pneumatischer Anschluss 1",
          FVALUE: "Innengewinde G1/8",
          FORDER: "490073",
          FVALUE_TYPE: "SET",
        },
        {
          FNAME: "Pneumatischer Anschluss 2",
          FVALUE: "für Schlauch Außendurchmesser 8 mm",
          FORDER: "500140",
          FVALUE_TYPE: "SET",
        },
      ],
    },
  ],
  PRODUCT_ORDER_DETAILS: {
    ORDER_UNIT: "PCE",
    CONTENT_UNIT: "PCE",
    NO_CU_PER_OU: "1",
    PRICE_QUANTITY: "1",
    QUANTITY_MIN: "10",
    QUANTITY_INTERVAL: "10",
  },
  PRODUCT_PRICE_DETAILS: {
    PRODUCT_PRICE: {
      "@price_type": "net_customer",
      PRICE_AMOUNT: "6.53",
      PRICE_CURRENCY: "EUR",
      TAX: "0.19",
      LOWER_BOUND: "10",
    },
  },
  MIME_INFO: {
    MIME: [
      {
        MIME_TYPE: "image/jpeg",
        MIME_SOURCE: "22AP1CAD.jpg",
        MIME_DESCR: "Produktbild",
        MIME_ALT: "Produktbild",
        MIME_PURPOSE: "normal",
      },
      {
        MIME_TYPE: "text/html",
        MIME_SOURCE: "00002021.html",
        MIME_DESCR: "Datenblatt",
        MIME_ALT: "Datenblatt",
        MIME_PURPOSE: "data_sheet",
      },
      {
        MIME_TYPE: "url",
        MIME_SOURCE:
          "https://www.festo.com/cat/de_de/xDKI.asp?PartNo=2021&writePDF=true&xR=DKI3WebDataSheetV1",
        MIME_DESCR: "PDF-Datasheet Link",
        MIME_ALT: "PDF-Datasheet Link",
        MIME_PURPOSE: "data_sheet",
      },
      {
        MIME_TYPE: "url",
        MIME_SOURCE: "https://www.festo.com/catalogue/2021/",
        MIME_DESCR: "Pneumatic Katalog",
        MIME_ALT: "Pneumatic Katalog",
        MIME_PURPOSE: "others",
      },
    ],
  },
  PRODUCT_REFERENCE: [
    {
      "@type": "accessories",
      PROD_ID_TO: "197378",
    },
    {
      "@type": "accessories",
      PROD_ID_TO: "197385",
    },
    {
      "@type": "accessories",
      PROD_ID_TO: "197392",
    },
    {
      "@type": "accessories",
      PROD_ID_TO: "8048691",
    },
  ],
  PRODUCT_LOGISTIC_DETAILS: {
    COUNTRY_OF_ORIGIN: "IT",
    PRODUCT_DIMENSIONS: {
      WEIGHT: "0.014",
    },
  },
};
const relatedProducts = [
  {
    id: 1,
    name: "Kunststoffschlauch",
    desc: "PUN-H-8X1,25-NT",
    number: "197378",
    imageRef: "22AP0B24",
    href: "#",
    imageSrc: `/images/22AP0B24.jpg`,
    imageAlt: "tbd",
    price: "€1.54",
  },
  {
    id: 2,
    name: "Kunststoffschlauch",
    desc: "PUN-H-8X1,25-BL",
    number: "197385",
    imageRef: "22AP08A7",
    href: "#",
    imageSrc: `/images/22AP08A7.jpg`,
    imageAlt: "tbd",
    price: "€1.54",
  },
  {
    id: 3,
    name: "Kunststoffschlauch",
    desc: "PUN-H-8X1,25-SW",
    number: "197392",
    imageRef: "22AP2834",
    href: "#",
    imageSrc: `#`,
    imageAlt: "tbd",
    price: "€1.54",
  },
  {
    id: 4,
    name: "Kunststoffschlauch",
    desc: "PUN-H-8X1,25-TBL",
    number: "8048691",
    imageRef: "22AP2A33",
    href: "#",
    imageSrc: `#`,
    imageAlt: "tbd",
    price: "€1.54",
  },
  // More products...
];

export default function ProductPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>
          {product.PRODUCT_FEATURES[1].REFERENCE_FEATURE_GROUP_NAME}{" "}
          {product.PRODUCT_DETAILS.DESCRIPTION_SHORT}
        </title>
      </Head>

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="lg:-mt-4 mb-4 lg:mb-8">
          <Breadcrumb />
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}

              <Tab.Panels className="aspect-w-10 aspect-h-7 w-full lg:border lg:rounded-lg">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src="https://www.landefeld.de/shop/media/logos_manufacturer/ot_teaser_festo.png"
                      alt=""
                      className="w-32 mt-5 ml-5"
                    />
                    <img
                      src={`https://res.cloudinary.com/do43c888y/festo/${product.MIME_INFO.MIME[0].MIME_SOURCE}`}
                      alt={`/images/${product.MIME_INFO.MIME[0].MIME_DESCR}`}
                      className="h-full w-full object-fit object-center sm:rounded-lg scale-75 -mt-5"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.PRODUCT_DETAILS.DESCRIPTION_SHORT}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>

                <p className="text-sm tracking-tight text-gray-900 mt-2">
                  Fremdartikelnummer:{" "}
                  {product.PRODUCT_DETAILS.MANUFACTURER_TYPE_DESCR}
                </p>
                <p className="text-sm tracking-tight text-gray-900 mt-2">
                  GTIN: {product.SUPPLIER_PID[1]["#text"]}
                </p>
                <p className="text-sm tracking-tight text-gray-900 mt-2">
                  {product.PRODUCT_FEATURES[1].REFERENCE_FEATURE_GROUP_NAME}{" "}
                  Produkt ID: {product.PRODUCT_DETAILS.MANUFACTURER_PID}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.PRODUCT_PRICE_DETAILS.PRODUCT_PRICE.PRICE_AMOUNT} €
                </p>
                <p className="text-sm tracking-tight text-gray-900">
                  {(
                    (+1 + +product.PRODUCT_PRICE_DETAILS.PRODUCT_PRICE.TAX) *
                    +product.PRODUCT_PRICE_DETAILS.PRODUCT_PRICE.PRICE_AMOUNT
                  ).toFixed(2)}{" "}
                  € inkl. MwSt
                </p>
              </div>
              <div className="mt-5">
                <label className="mr-2">Anzahl:</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6 text-base text-green-600">
                  Sofort ab Lager lieferbar. Bestellen Sie bis 18:00 Uhr und wir
                  versenden noch heute kostenfrei.
                </div>
              </div>

              <form className="mt-6">
                <div className="mt-10 flex">
                  <button
                    type="submit"
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    In den Warenkorb
                  </button>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {/* {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))} */}
                </div>
              </section>
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-20">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Eigenschaften
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Eigenschaften der {product.PRODUCT_DETAILS.DESCRIPTION_SHORT}{" "}
                  von {product.PRODUCT_FEATURES[1].REFERENCE_FEATURE_GROUP_NAME}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  {product.PRODUCT_FEATURES[1].FEATURE?.map((feature, idx) => (
                    <div
                      key={idx}
                      className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        {feature.FNAME}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {feature.FVALUE}
                      </dd>
                    </div>
                  ))}

                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Dokumente
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 rounded-md border border-gray-200"
                      >
                        {" "}
                        {product.MIME_INFO.MIME.map((attachment, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                          >
                            <div className="flex w-0 flex-1 items-center">
                              <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 w-0 flex-1 truncate">
                                {attachment.MIME_DESCR}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                href={attachment.MIME_SOURCE}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-20">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Weitere Informationen zu{" "}
                  {product.PRODUCT_DETAILS.DESCRIPTION_SHORT}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Hier finden Sie weitere Informationen zu{" "}
                  {product.PRODUCT_DETAILS.DESCRIPTION_SHORT} von{" "}
                  {product.PRODUCT_FEATURES[1].REFERENCE_FEATURE_GROUP_NAME}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Gewicht
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {Number(
                        product.PRODUCT_LOGISTIC_DETAILS.PRODUCT_DIMENSIONS
                          .WEIGHT
                      ) * 1000}
                      {""} g / Stk.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">GTIN</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {product.SUPPLIER_PID[1]["#text"]}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Verpackungseinheit
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {product.PRODUCT_ORDER_DETAILS.QUANTITY_MIN}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Zollwarennummer
                    </dt>
                    <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">
                      Tbd
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      RoHS konform
                    </dt>
                    <dd className="mt-1 text-sm text-red-500 sm:col-span-2 sm:mt-0">
                      Tbd
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Hersteller
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {product.PRODUCT_FEATURES[1].REFERENCE_FEATURE_GROUP_NAME}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Finden Sie die das perfekte Zubehör, um Ihre Produktkonfiguration
              zu vervollständigen
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product, idx) => (
                <div key={idx}>
                  <div className="">
                    <div className="aspect-h-12 aspect-w-18 w-full overflow-hidden rounded-lg border">
                      <img
                        src={`https://res.cloudinary.com/do43c888y/festo/${product.imageRef}.jpg`}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center scale-90"
                      />
                    </div>
                    <div className=" mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.desc}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.number}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className=" flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      In den Warenkorb
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
