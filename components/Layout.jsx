import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, setSlug }) => {
  return (
    <>
      <Head>
        <title>Acortador Urls</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header setSlug={setSlug} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
