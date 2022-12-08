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
import { Product } from "../types";
import { useRecoilState } from "recoil";

import { checkoutProductsList } from "../util/Recoil";

export default function ProductPage({ product }: { product: Product }) {
  const [checkoutProducts, setCheckoutProducts] =
    useRecoilState(checkoutProductsList);

  const addProductToCheckout = () => {
    const isProductAlreadyAdded = checkoutProducts.some(
      (checkedProduct: Product) => {
        return checkedProduct.objectID === product.objectID;
      }
    );
    isProductAlreadyAdded
      ? null
      : setCheckoutProducts([...checkoutProducts, product]);
  };

  // return (
  //   <div>
  //     <div className="mt-10 flex">
  //       <button
  //         onClick={() => addProductToCheckout}
  //         className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
  //       >
  //         In den Warenkorb
  //       </button>

  //       <button
  //         type="button"
  //         className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
  //       >
  //         <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
  //         <span className="sr-only">Add to favorites</span>
  //       </button>
  //     </div>
  //   </div>
  // );
  console.log(product.product_parents);
  return (
    <div className="bg-white">
      <Head>
        <title>{product.product_details.description_short}</title>
      </Head>

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="lg:-mt-4 mb-4 lg:mb-8">
          <Breadcrumb product_parents={product.product_parents} />
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}

              <Tab.Panels className="aspect-w-10 aspect-h-7 w-full lg:border lg:rounded-lg">
                <Tab.Panel>
                  <img
                    src="https://www.landefeld.de/shop/media/logos_manufacturer/ot_teaser_festo.png"
                    alt=""
                    className="w-32 mt-5 ml-5"
                  />
                  <img
                    src={`https://res.cloudinary.com/do43c888y/festo/${product.mime_info.mime[0].mime_source}`}
                    alt={`${product.mime_info.mime[0].mime_alt} ${product.product_features[1].reference_feature_group_name} ${product.product_details.description_short}`}
                    className="h-full w-full object-fit object-center sm:rounded-lg scale-75 -mt-5"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.product_details.description_short}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>

                <p className="text-lg tracking-tight text-red-500 mt-2">
                  Artikelnummer: Tbd
                </p>
                <p className="text-md tracking-tight text-gray-900 mt-2">
                  Fremdartikelnummer:{" "}
                  {product.product_details.manufacturer_interface_descr}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.product_price_details.product_price.price_amount} €
                </p>
                <p className="text-sm tracking-tight text-gray-900">
                  {(
                    (+1 + +product.product_price_details.product_price.tax) *
                    +product.product_price_details.product_price.price_amount
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
                  Eigenschaften der {product.product_details.description_short}{" "}
                  von {product.product_features[0].reference_feature_group_name}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  {product.product_features[1].feature?.map((feature, idx) => (
                    <div
                      key={idx}
                      className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        {feature.fname}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {feature.fvalue}
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
                        {product.mime_info.mime.map((attachment, idx) => (
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
                                {attachment.mime_descr}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                href={attachment.mime_source}
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
                  {product.product_details.description_short}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Hier finden Sie weitere Informationen zu{" "}
                  {product.product_details.description_short} von{" "}
                  {product.product_features[1].reference_feature_group_name}
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
                        product.product_logistic_details.product_dimensions
                          .weight
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
                      {product.supplier_pid[1]["#text"]}
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
                      {product.product_order_details.quantity_min}
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
                      {product.product_features[1].reference_feature_group_name}
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
              {product?.product_reference?.map((product, idx) => (
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
