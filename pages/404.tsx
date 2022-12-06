import Link from "next/link";
import Paragraph from "../components/htmlComponents/Paragraph";
import Layout from "../components/Layout";

export default function Example() {
  return (
    <>
      <Layout>
        <div className="-mt-20 h-screen bg-cover bg-top sm:bg-top">
          <div className="mx-auto max-w-7xl px-4 py-24 md:py-24  text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <Paragraph className="text-base font-semibold text-gray-900 text-opacity-50">
              🐾 404
            </Paragraph>
            <h1 className="mt-2 text-4xl text-primary font-bold tracking-tight sm:text-5xl">
              Falsche Fährte!
            </h1>
            <Paragraph className="mt-2 text-lg font-medium text-gray-900 text-opacity-50">
              Die Seite, die Du suchst existiert leider nicht (mehr)...
            </Paragraph>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-gray-900 text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
