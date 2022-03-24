import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { NextPage } from "next";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{"Julian Ollivieira"}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
