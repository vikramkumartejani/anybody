import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface Video {
  video: {
    id: string;
    thumbnailUrl: string;
    videoUrl: string;
    tiktokUser: string;
    music: string;
  };
}

const AppVideo: React.FC<Video> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [thumbnailOpacity, setThumbnailOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageLoader = () => {
    return `${video.thumbnailUrl}`
  }
  const handleVideoEnd = () => { setIsPlaying(false); };
  const togglePlay = () => {
    if (!showVideo) {
      setIsPlaying(true)
      setThumbnailOpacity(0);
      setTimeout(() => {
        setShowVideo(true);
        setVideoOpacity(0);
        setTimeout(() => setVideoOpacity(1), 300);
      }, 300);
      return;
    }
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="relative sm:h-full w-full" role="presentation">
      <div className="top-0 left-0 z-10 absolute w-full">
        <div className="flex justify-center items-end h-[20px] w-full px-2 gap-2 mb-4" aria-hidden="true">
          <Image width={80} height={80} className="w-1/4 h-1/2" src="/icons/time.svg" alt="Time icon"/>
          <div className="bg-black rounded-b-xl h-full w-1/2"></div>
          <div className="w-1/4 h-1/2 flex justify-end gap-1.5">
            <Image width={80} height={80} className="w-auto" src="/icons/reception.svg" alt="Reception signal icon"/>
            <Image width={80} height={80} className="w-auto" src="/icons/wifi.svg" alt="Wifi signal icon"/>
            <Image width={80} height={80} className="w-auto" src="/icons/battery.svg" alt="Battery status icon"/>
          </div>
        </div>
        <div className="flex justify-between items-center mx-4">
          <Image width={80} height={80} className="h-7 w-auto" src="/icons/back.svg" alt="Back icon"/>
          <div className="flex flex-col text-white flex-1 px-4">
            <div className="text-xs mb-1 font-semibold">{video.music}</div>
            <div className="font-bold">{video.tiktokUser}</div>
          </div>
          <Image width={80} height={80} className="h-7 w-auto" src="/icons/share.svg" alt="Share icon"/>
        </div>
      </div>
      <div className="bottom-0 right-0 z-10 absolute flex flex-col mr-4 mb-4">
        <div className="flex flex-col items-center p-2">
          <Image width={80} height={80} className="w-auto" src="/icons/heart.svg" alt="Heart icon"/>
        </div>
        <div className="flex flex-col items-center mb-2">
          <Image width={80} height={80} className="w-auto" src="/icons/percentage.svg" alt="Percentage 60"/>
          <Image width={80} height={80} className="w-auto" src="/icons/speed.svg" alt="Speed icon"/>
        </div>
        <div className="flex flex-col items-center mb-2">
          <Image width={80} height={80} className="pb-2.5 w-auto" src="/icons/section.svg" alt="Section 1-4"/>
          <Image width={80} height={80} className="w-auto" src="/icons/length.svg" alt="Length icon"/>
        </div>
      </div>
      {!isPlaying && (
        <svg onClick={togglePlay} className="play lg:hover:fill-gray-200 transition-colors cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 absolute w-full h-10" version="1.1" fill="#fff" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 92.2 122.88">
          <g><polygon className="st0" points="92.2,60.97 0,122.88 0,0 92.2,60.97"/></g>
        </svg>
      )}
      <figure className="relative h-full w-full rounded-3xl bg-zinc-700 overflow-hidden">
        {!showVideo && (
          <div className="w-full h-full flex items-center justify-center relative">
            <a target="_blank" href="https://anybodymovz.page.link/app">
              <Image fill loading="lazy" src="/icons/logo-sm-light.svg" loader={imageLoader} style={{ opacity: thumbnailOpacity }} alt="Video thumbnail" className="absolute w-full h-full object-cover transition-opacity duration-500" />
            </a>
          </div>
        )}
        {showVideo && (
          <video style={{ opacity: videoOpacity }} onClick={togglePlay} ref={videoRef} autoPlay preload="auto" className={`object-cover h-full w-full absolute transition-opacity duration-500 ${isPlaying ? 'cursor-pointer' : ''}`} onEnded={handleVideoEnd} controls={false} aria-describedby={video.id}>
            <source src={video.videoUrl} type="video/webm" />
          </video>
        )}
        <figcaption id={video.id} hidden>Video titled {video.music}</figcaption>
      </figure>
    </div>
  );
}

export default AppVideo;