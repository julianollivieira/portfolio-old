import type { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";
import "../styles/globals.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
