import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import GlobalStyle from "../globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  return (
    <>
      <Head>
        <title>Brix</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <UserContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
