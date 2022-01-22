import type { AppProps } from "next/app";
import React, { useEffect } from "react";
// import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });
  return (
    <React.Fragment>
      <Head>
        <title>Joinder</title>
        <meta
          name="viewport"
          content="minimum-scale=1,initial-scale=1,width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
