import React, { useEffect, useState } from 'react';

function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="h-[calc(100vh-156px)] sm:h-[calc(100vh-136px)] lg:h-[calc(100vh-72px)]">
      <div
        className="h-full"
        data-tf-widget="wv04dcGy"
        data-tf-opacity="100"
        data-tf-inline-on-mobile
        data-tf-iframe-props="title=Dancer application"
        data-tf-transitive-search-params
        data-tf-auto-focus
        data-tf-medium="snippet"
      ></div>
    </div>
  );
}

export default ContactPage;