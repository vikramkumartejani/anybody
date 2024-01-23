import React, {useEffect, useState, useRef} from 'react';
import Link from 'next/link'

interface Feed {
  isScrolled: boolean;
}

const AppMenu: React.FC<Feed> = ({ isScrolled }) => {
  const menu = useRef<HTMLDivElement | null>(null)
  const button = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (button.current && menu.current) {
      const handleClick = () => {
        button.current?.classList.toggle('-menu-open');
        menu.current?.classList.toggle('-open');

      };
      if ("addEventListener" in button.current) {
        button.current.addEventListener('click', handleClick);
      }
      // Optional: Clean up the event listener on unmount
    }
  }, []);
  return (
    <div className="flex">
      <nav ref={menu} className="menu h-full text-black transition-all items-center justify-center text-2xl sm:text-3xl relative">
        <ul className="flex h-full list-none absolute gap-2 right-0">
          <li className={`${isScrolled ? 'lg:text-white lg:bg-zinc-700' : ''} text-zinc-700 flex items-center px-1 sm:px-2 rounded`}><Link href="/">Home</Link></li>
          <li className={`${isScrolled ? 'lg:text-white lg:bg-zinc-700' : ''} text-zinc-700 flex items-center px-1 sm:px-2 rounded`}><Link href="/application">Apply</Link></li>
          <li className={`${isScrolled ? 'lg:text-white lg:bg-zinc-700' : ''} text-zinc-700 flex items-center px-1 sm:px-2 rounded`}><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <div ref={button} className="button">
        <svg className={`${isScrolled ? 'lg:stroke-white' : void 0} p-1 stroke-zinc-700 h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]`} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <line x1="0" y1="17" x2="48" y2="17" strokeWidth="2"/>
            <line x1="10" y1="31" x2="48" y2="31" strokeWidth="2"/>
          </g>
          <g>
            <line x1="0" y1="24" x2="48" y2="24" strokeWidth="2" />
            <line x1="0" y1="24" x2="48" y2="24" strokeWidth="2"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default AppMenu;