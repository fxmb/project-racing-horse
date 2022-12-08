import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import CookieConsent from "./cookie/CookieConsent";

type SEOMeta = {
  title?: string;
  desc?: string;
  image?: string;
};

export default function Layout({
  children,
  title,
  image,
  desc,
}: PropsWithChildren<SEOMeta>) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="robots" content="index,follow" />

        {/* OG Info */}
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta property="og:site_name" content="PuppyPals" />
        <meta
          property="og:url"
          content={`https://www.puppypals.de${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`${image ? image : "/flixpart-titelbild.webp"}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link
          rel="canonical"
          href={`https://www.puppypals.de${router.asPath}`}
        />
        <link rel="icon" href="/horse-logo.ico" />
      </Head>

      <Header />
      <main className="bg-background pb-20">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
