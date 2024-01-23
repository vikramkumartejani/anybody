import React, { useEffect, useState } from 'react';
import AppMenu from "./AppMenu";
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const getLogoSrc = () => {
    if (windowWidth === undefined) {
      return '/icons/logo-sm-dark.svg'; // default logo for SSR
    } else if (windowWidth >= 1024) {
      return `/icons/${isScrolled ? 'logo-sm-light.svg' : 'logo-sm-dark.svg'}`; // modify as per your need
    } else {
      return '/icons/logo-sm-dark.svg';
    }
  }
  return (
    <header className={`z-max lg:fixed top-0 left-0 w-full transition-colors bg-white ${isScrolled ? 'lg:bg-transparent' : ''}`}>
      <div className="flex justify-between px-3 sm:px-6 py-2">
        <div className="relative">
          <Image height={48} width={48} className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]" src={getLogoSrc()} alt="Small Logo"/>
        </div>
        <AppMenu isScrolled={isScrolled}></AppMenu>
      </div>
    </header>
  );
};