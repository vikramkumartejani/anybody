import '../styles/globals.scss'
import AppHeader from '../components/AppHeader'
import AppFooter from "../components/AppFooter";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHeader></AppHeader>
      <Component {...pageProps} />
      <AppFooter></AppFooter>
    </div>
  )
}

export default MyApp