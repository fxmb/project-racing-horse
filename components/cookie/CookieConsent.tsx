import Link from "next/link";

import Cookies from "js-cookie";
import { MouseEvent, useEffect, useState } from "react";
import Paragraph from "../htmlComponents/Paragraph";

const USER_CONSENT_ALL_COOKIES = "all_ppc";
const USER_CONSENT_ESSENTIAL_COOKIES = "essential_ppc";
const USER_CONSENT_COOKIE_EXPIRE_DATE =
  new Date().getTime() + 365 * 24 * 60 * 60;

const CookieConsent = () => {
  const [userMadeCookieChoiceTrue, setuserMadeCookieChoiceTrue] =
    useState(true);

  useEffect(() => {
    const consentAllIsTrue = Cookies.get(USER_CONSENT_ALL_COOKIES) === "true";
    const consentEssentialIsTrue =
      Cookies.get(USER_CONSENT_ESSENTIAL_COOKIES) === "true";
    const showCookies = consentAllIsTrue || consentEssentialIsTrue;

    setuserMadeCookieChoiceTrue(showCookies);
  }, []);

  const agreedCookies = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userMadeCookieChoiceTrue) {
      Cookies.set(USER_CONSENT_ALL_COOKIES, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setuserMadeCookieChoiceTrue(true);
    }
  };

  const declinedCookies = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userMadeCookieChoiceTrue) {
      Cookies.set(USER_CONSENT_ESSENTIAL_COOKIES, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setuserMadeCookieChoiceTrue(true);
    }
  };
  if (userMadeCookieChoiceTrue) {
    return null;
  }

  return (
    <section className="fixed z-[9999] inset-x-3 sm:inset-x-10 xl:inset-x-28 bottom-3">
      <div className="flex rounded flex-col md:items-center py-4 px-4 sm:px-8 bg-slate-200 shadow-md md:flex-row">
        <div className="mb-5 md:mb-0 flex-col flex-grow text-gray-900">
          <Paragraph className="text-xl font-bold flex items-center">
            <span className="text-3xl mr-2">🍪</span> Cookies gefällig?
          </Paragraph>
          <Paragraph className="font-medium">
            Geparts benutzt Cookies, um Dir die bestmögliche Nutzererfahrung zu
            bieten. Mehr dazu in unserer{" "}
            <span className="inline-block">
              <Link
                href="/datenschutz"
                className="underline hover:text-lightAccent"
              >
                Datenschutzerklärung
              </Link>
              .<span className="text-2xl ml-1">🐾</span>
            </span>
          </Paragraph>
        </div>
        <div className="flex md:justify-center">
          <div className="flex pr-3">
            <button
              className="px-6 py-2 text-sm font-bold text-white bg-gray-400 hover:bg-gray-500 whitespace-nowrap rounded-md"
              onClick={declinedCookies}
            >
              Nur Notwendige
            </button>
          </div>
          <div className="flex">
            <button
              className="px-6 py-2 text-sm font-bold text-white bg-primary whitespace-nowrap rounded-md"
              onClick={agreedCookies}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
