import Link from 'next/link';
import React, {useEffect, useState} from 'react';

const Footer = () => {
  useEffect(() => {

  }, []);
  return (
    <footer className="z-max relative bg-black py-4 px-8" aria-label="Main Footer">
      <div className="flex flex-col items-center sm:flex-row justify-between text-white text-sm gap-2">
        <address className="not-italic font-bold flex flex-row sm:flex-col gap-2 sm:gap-0">
          <div>MOVZ Corp. 2022</div>
          <div>Patent pending</div>
        </address>
        <div className="flex flex-col items-center" aria-label="Contact Information">
          <div className="font-bold">For feedback or questions:</div>
          <a href="mailto:support@anybodymovz.com" className="italic text-gray-300">
            support@anybodymovz.com
          </a>
        </div>
        <div className="font-bold ">
          <a href="https://app.termly.io/document/privacy-policy/b00634fa-1ed1-4516-9364-6c125178c284#sociallogins">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;