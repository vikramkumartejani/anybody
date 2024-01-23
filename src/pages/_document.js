import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name="description" content="Learn how to dance with us!"/>
        <link rel="icon" type="image/png" sizes="128x128" href="/favicons/favicon-128x128.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="icon" type="image/ico" href="/favicons/favicon.ico"/>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="shortcut icon" type="image/ico" href="/favicons/favicon.ico"/>
        <link rel="apple-touch-icon" type="image/ico" href="/favicons/favicon.ico"/>
        <link rel="apple-touch-icon-precomposed" type="image/ico" href="/favicons/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}