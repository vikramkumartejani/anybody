import React, {useEffect, useState, useRef} from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import AppVideo from "./AppVideo";

const LatestVideos = ({ videos }) => {
  const [perView, setPerView] = useState<'auto' | 1>(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    // This code will only run in the browser after the component is mounted
    setPerView(window.innerWidth > 600 ? 'auto' : 1);
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: perView, spacing: 30 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  });
  const isBeginning: boolean = currentSlide === 0
  const isEnd: boolean = currentSlide === instanceRef.current?.track.details.maxIdx
  if (videos) {
    return (
      <section className="w-full bg-[#F3B5B8] px-6 py-12 lg:p-20 sm:p-10 lg:px-28 relative flex flex-col items-center">
        <h1 className="self-start lg:h-full max-w-[80rem] font-semibold text-3xl mb-6 sm:mb-16 text-white">Latest dances</h1>
        <div className="lg:h-full sm:max-w-[90rem] p-6 w-full flex flex-col justify-center">
          <div className="relative">
            <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={isBeginning}/>
            <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} disabled={isEnd}/>
            <div ref={ sliderRef } className="keen-slider">
              {videos ? videos.map((video, index) => (
                <div className={`flex flex-row justify-center h-[31.25rem] lg:h-[37.5rem] min-w-[21.094rem] keen-slider__slide number-slide${ index }`} key={ index }>
                  <AppVideo key={ index } video={ video }></AppVideo>
                </div>
              )) : null}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? "hidden" : ""
  return (
    <svg onClick={props.onClick} className={`z-10 -translate-y-1/2 absolute top-1/2 0 cursor-pointer h-8 sm:h-16 w-auto ${props.left ? "-left-8 sm:-left-12" : "-right-8 sm:-right-12"} ${disabled}`} xmlns="http://www.w3.org/2000/svg" width="99" height="180" viewBox="0 0 99 180" fill="none">
      {props.left && (
        <path className="lg:hover:fill-gray-100 transition-colors" d="M0.687408 90.1399L96.6874 0.506256L96.6874 179.774L0.687408 90.1399Z" fill="white"/>
      )}
      {!props.left && (
        <path className="lg:hover:fill-gray-100 transition-colors" d="M98.6655 87.4645L5.04469 179.58L0.352022 0.374607L98.6655 87.4645Z" fill="white"/>
      )}
    </svg>
  )
}


export default LatestVideos;