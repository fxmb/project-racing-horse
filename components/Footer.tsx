import Image from "next/image";
import Link from "next/link";
import logo from "../public/horse-logo.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Paragraph from "./htmlComponents/Paragraph";

const navigation = {
  city: [
    { name: "Festo", href: "/hundeschule-berlin" },
    { name: "Bosch Rexroth", href: "/hundeschule-hamburg" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  contact: [
    {
      name: "Email",
      href: "mailto:team@puppypals.de",
      icon: EnvelopeIcon,
    },
  ],
  social: [],
};

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 xl:px-0 py-12">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="space-y-8 xl:col-span-3">
            <Image
              width={40}
              height={40}
              src={logo}
              alt="Geparts Logo"
              className="bg-white rounded-full p-1 shadow-xl shadow-indigo-500"
            />
            <Paragraph className="text-base text-gray-300">
              Geparts - Der One-Stop Shop für Ersatzteile der Hydraulik &
              Pneumatik.
            </Paragraph>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-gray-300"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-gray-300">
                <a
                  href="mailto:team@puppypals.de"
                  className="text-base text-gray-300 hover:text-white"
                >
                  team@geparts.de
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5" />
          <div className="mt-12 grid grid-cols-2 gap-8 items-start lg:justify-items-end xl:col-span-4 xl:mt-0 ">
            <div>
              <h3 className="text-base font-medium text-white">Marken</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.city
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">Rechtliches</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8">
          <Paragraph className="text-base text-gray-300 xl:text-center">
            &copy; {new Date().getFullYear()} Geparts, Inc. All rights reserved.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
