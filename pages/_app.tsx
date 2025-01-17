import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
