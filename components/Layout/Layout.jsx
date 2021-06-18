// core
import React from 'react'

// library
import Head from 'next/head'

// components
import { Footer, Header } from "../../components";

export const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Eduserve</title>
        <link rel="shortcut icon" href={"/favicon.ico"} type="image/x-icon" />
        <meta name="description" content="Eduserve web site" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff9200" />

        {/* open graph meta tags */}
        <meta property="og:title" content="Eduserve" />
        {/*<meta property="og:image" content="/SEO.png" />*/}
        <meta property="og:description" content="Eduserve web site" />
      </Head>
      <Header />
      <main>{children}</main>
      {/*<Footer />*/}
    </>
  )
};
