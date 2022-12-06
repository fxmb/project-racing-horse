import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Paragraph from "./htmlComponents/Paragraph";

const navigation = {
  city: [
    { name: "Berlin", href: "/hundeschule-berlin" },
    { name: "Hamburg", href: "/hundeschule-hamburg" },
    { name: "Köln", href: "hundeschule-koeln" },
    { name: "München", href: "/hundeschule-muenchen" },
    { name: "Frankfurt am Main", href: "/hundeschule-finden?zip=60311" },
    { name: "Leipzig", href: "/hundeschule-leipzig" },
    { name: "Dortmund", href: "/hundeschule-dortmund" },
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
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="space-y-8 xl:col-span-3">
            <Image width={40} height={40} src={logo} alt="PuppyPals Logo" />
            <Paragraph className="text-base text-gray-500">
              PuppyPals - Der One-Stop Shop für alle wichtigen Infos zu deinem
              Hund.
            </Paragraph>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-gray-500">
                <a
                  href="mailto:team@puppypals.de"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  team@puppypals.de
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5" />
          <div className="mt-12 grid grid-cols-2 gap-8 items-start xl:col-span-4 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-gray-900">
                Hundeschulen
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li key="in der Nähe">
                  <Link
                    href="/hundeschule-in-der-naehe"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    in der Nähe
                  </Link>
                </li>
                {navigation.city
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">
                Rechtliches
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Paragraph className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} PuppyPals, Inc. All rights
            reserved.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
