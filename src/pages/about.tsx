import Head from "next/head";
import React from "react";
import Image from 'next/image'
import AvailableNow from "../components/AvailableNow";

export default function About() {
  return (
    <div>
      <Head>
        <title>AnybodyMovz - About</title>
      </Head>
      <section>
        <section className="pt-48 sm:pt-16 pb-16 px-6 flex flex-col items-center sm:px-20 lg:px-24 w-full sm:h-[160vh] bg-about-hero bg-no-repeat bg-cover bg-[65%_0]">
          <div className="pb-10 sm:pb-0 w-full flex flex-col sm:h-[calc(100vh-3.125rem)] lg:h-screen items-center sm:justify-center relative">
            <h1 className="text-rose font-bold text-3xl sm:text-6xl mb-20 sm:mb-12">ABOUT MOVZ</h1>
            <p className="gap-5 flex flex-col items-center max-w-3xl text-white font-semibold text-md sm:mb-20">
              <span className="text-center">
                We are on a mission.<br/>
                On a mission to provide the technological innovation that the dance scene has been waiting for.<br/>
                Part of this mission is to make dance accessible for anyone, introverted, extroverted, living in L.A. or living in Vietnam. MOVZ lets you learn the dances you love at your own pace wherever you are.<br/>
                Another part of that mission is to provide a platform for dancers to get the recognition they deserve. We are striving to become for dancers what Spotify is for musicians: a platform to monetize their talent on.
              </span>
              <span className="text-center">
                We know our goal but what the final product will be depends on you, our user!<br/>
                Please get in touch with us for questions and feedback:<br/>
                <a href="mailto:support@anybodymovz.com" className="italic">support@anybodymovz.com</a>
              </span>
            </p>
            <aside className="hidden sm:flex pt-10 sm:pt-0 place-self-start sm:absolute sm:bottom-16 left-0">
              <AvailableNow></AvailableNow>
            </aside>
          </div>
          <section className="py-10 sm:p-0 max-w-3xl font-bold flex flex-col items-center justify-center h-[60vh]">
            <h2 className="text-rose text-xl mb-12">App Rating: 4.6</h2>
            <blockquote className="text-3xl text-white text-center mb-4">“I love this app like where have you been all this time? No more waiting for bad tutorials”</blockquote>
            <cite className="place-self-start text-sm text-white not-italic">- APP STORE REVIEW</cite>
          </section>
        </section>
        <section className="py-16 sm:py-10 px-10 sm:px-20 sm:py-32 bg-rose text-white flex flex-col items-center">
          <h2 className="text-center">
            <div className="hidden sm:flex text-xl mb-3 place-content-center">MEET OUR</div>
            <div className="text-3xl font-bold mb-10 sm:mb-20">FOUNDING TEAM</div>
          </h2>
          <div className="flex flex-col sm:flex-row justify-evenly w-full font-bold sm:gap-16">
            <figure className="flex flex-col items-center max-w-md mb-14">
              <Image height={160} width={160} className="w-auto h-[160px]" loading="lazy" src="/images/marthe.webp" alt="Marthe Lüebbers"/>
              <figcaption>
                <div className="text-2xl my-5 sm:my-10 text-center">Marthe Lübbers, CEO</div>
                <p className="text-center text-sm">
                  “I love dancing and was always frustrated by how inaccessible dance is: my favorite dancers live in other cities and even if I could attend their dance classes I wouldn’t be able to learn the dance as fast as I could by myself simply by adjusting the dance videos to my needs and copying the moves. When Tiktok dances rose in popularity and noone yet offered this technology, I decided to do it myself.”
                </p>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center max-w-md w-auto relative">
              <Image height={160} width={160} loading="lazy" src="/images/chris.webp" alt="Chris Gross"/>
              <figcaption>
                <div className="text-2xl my-5 sm:my-10 text-center">Chris Gross, CMO</div>
                <p className="text-center text-sm">
                  “I started seeing kids outside recording themselves dancing all the time. When I heard about Marthe’s idea, and researched the market, I knew she was onto something and joined her. The success of the initial web app anybodymovz.com proofed the concept and I am excited to use my corporate experience and help MOVZ app reach the youth all over the world to get people moving .”
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      </section>
    </div>
  )
}