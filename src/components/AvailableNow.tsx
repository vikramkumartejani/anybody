import React from "react";
import Image from 'next/image'

const AvailableNow = (props) => {
  return (
    <div className="w-full flex flex-col">
      {'hasTitle' in props && <div className="text-white font-semibold mb-4">Available now:</div>}
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.anybodymovz.app">
        <Image width={200} height={60} className="w-[150px] sm:w-[200px] relative mb-2" src="/images/play-store.webp" alt="Apple Store" />
      </a>
      <a target="_blank" href="https://apps.apple.com/app/movz/id1639031061">
        <Image width={200} height={60} className="w-[150px] sm:w-[200px] relative" src="/images/app-store.webp" alt="Play Store" />
      </a>
    </div>
  )
}

export default AvailableNow;
