import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  FaceSmileIcon,
  TruckIcon,
  LightBulbIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/horse-logo.svg";
import Paragraph from "./htmlComponents/Paragraph";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";

import { checkoutProductsList } from "../util/Recoil";
const features = [
  {
    name: "Über uns",
    href: "/ueber-uns",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: FaceSmileIcon,
  },
];

export default function Header() {
  const [checkoutProducts, setCheckoutProducts] =
    useRecoilState(checkoutProductsList);
  return (
    <Popover className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-between items-center lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Geparts</span>
              <div className="mr-1.5">
                <Image width={40} height={40} src={logo} alt="Geparts Logo" />
              </div>
              <Paragraph className="text-xl font-black text-gray-700">
                Geparts
              </Paragraph>
            </Link>
            <div className="hidden md:flex items-center">
              <ClockIcon className="text-primary h-9 w-9 stroke-2 mr-2" />
              <div className="flex flex-col">
                <span className="font-bold text-primary -mb-1 text-lg">
                  Sofort
                </span>
                <span className="font-light text-primary">
                  lieferbar über Nacht
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <TruckIcon className="text-primary h-9 w-9 stroke-2 mr-2" />
              <div className="flex flex-col">
                <span className="font-bold text-primary -mb-1 text-lg">
                  Frei-Haus
                </span>
                <span className="font-light text-primary">deutschlandweit</span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <LightBulbIcon className="text-primary h-9 w-9 stroke-2 mr-2" />
              <div className="flex flex-col">
                <span className="font-bold text-primary -mb-1 text-lg">
                  Technische Beratung
                </span>
                <span className="font-light text-primary">
                  durch unsere Ingenieure
                </span>
              </div>
            </div>

            <Link href="/checkout">
              <div className="hidden md:flex items-center">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {checkoutProducts?.length || 0}
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center">{""}</div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#FEFBF5] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {features.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <span className="sr-only">Geparts</span>
                  <div className="mr-1.5">
                    <Image
                      width={40}
                      height={40}
                      src={logo}
                      alt="Geparts Logo"
                    />
                  </div>
                  <Paragraph className="text-xl font-black text-gray-700">
                    Geparts
                  </Paragraph>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {features.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
