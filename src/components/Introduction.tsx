import React from 'react';
import Image from 'next/image';
import AvailableNow from "./AvailableNow";

export default function Introduction() {
  return (
    <main role="main">
      <section className="sm:relative pt-48 pb-10 sm:py-80 px-6 w-full bg-introduction-hero bg-no-repeat bg-cover bg-top flex flex-col items-center lg:justify-end">
        <div className="lg:h-full max-w-[90rem] flex flex-col justify-center">
          <header className="mb-20 sm:mb-80 flex flex-col items-center">
            <h1 className="tracking-[.3em] text-white text-[1.75rem] sm:text-3xl sm:text-md mb-2 sm:mb-4">Anybody</h1>
            <div className="w-full flex justify-center relative">
              <Image width={500} height={250} loading="eager" sizes="(max-width: 768px) 1vw" src="/icons/logo-lg.svg" alt="Large Logo"/>
            </div>
          </header>
          <figure className="flex flex-col items-end w-full sm:px-20 px-3 mb-20">
            <blockquote className="lg:pl-16 w-4/5 lg:w-2/5 text-white text-[1.25rem] sm:text-3xl">“MOVZ is a game-changer for this scene, I love, love, LOVE the app”</blockquote>
            <figcaption className="lg:pl-16 w-4/5 lg:w-2/5 mt-2 text-rose">-KYSHA (@OIKYSHA)</figcaption>
          </figure>
          <div className="flex flex-col lg:flex-row sm:gap-32 sm:px-20 px-3">
            <p className="flex-1 text-rose font-semibold text-2xl mb-4">MOVZ lets you create your own dance class at home: learn the trendiest dances without instructor.</p>
            <div className="flex flex-col flex-1 text-gray-200">
              <p className="mb-4">MOVZ technology revolves around the principles of learning any dance: break the dance down into smaller parts, slow the speed down or have it increase progressively while you copy the moves. With MOVZ you can learn a dance in a fraction of the time.</p>
              <p>We are constantly testing new features to make MOVZ the fun experience that learning dances should be. Stay tuned.</p>
            </div>
          </div>
          <aside className="pt-6 px-3 sm:pt-0 place-self-start sm:absolute sm:bottom-20 left-0 sm:left-20">
            <AvailableNow />
          </aside>
        </div>
      </section>
    </main>
  )
}