import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  AcademicCapIcon,
  XMarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import Paragraph from "./htmlComponents/Paragraph";

const features = [
  {
    name: "Hundeschulen",
    href: "/hundeschule",
    description: "Finde Hundeschulen in deiner Nähe",
    icon: AcademicCapIcon,
  },
  {
    name: "Über uns",
    href: "/ueber-uns",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: FaceSmileIcon,
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-[#FEFBF5]">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">PuppyPals</span>
              <div className="mr-1.5">
                <Image width={40} height={40} src={logo} alt="PuppyPals Logo" />
              </div>
              <Paragraph className="text-xl font-black text-gray-700">
                PuppyPals
              </Paragraph>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#FEFBF5] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link
              href="/hundeschule"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Hundeschulen
            </Link>
            <Link
              href="/ueber-uns"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Über uns
            </Link>
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
                  <span className="sr-only">PuppyPals</span>
                  <div className="mr-1.5">
                    <Image
                      width={40}
                      height={40}
                      src={logo}
                      alt="PuppyPals Logo"
                    />
                  </div>
                  <Paragraph className="text-xl font-black text-gray-700">
                    PuppyPals
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
