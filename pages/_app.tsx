import "../styles/globals.css";
import type { AppProps } from "next/app";
import SchoolListAndMapContextProvider from "../context/SchoolListAndMapContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SchoolListAndMapContextProvider>
      <Component {...pageProps} />
    </SchoolListAndMapContextProvider>
  );
}

export default MyApp;
