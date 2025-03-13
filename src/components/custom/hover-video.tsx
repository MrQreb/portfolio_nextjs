"use client";
import { useState } from "react";
import Image from "next/image";

interface HoverVideoProps {
  imageURL: string;
  videoURL: string;
  imageClassName?: string;
  videoClassName?: string;
}

export default function HoverVideo({
  imageURL = "",
  videoURL = "",
  imageClassName = "",
  videoClassName = "",
}: HoverVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  const tranformVideoURL = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  };

  return (
    <div className="m-auto relative lg:w-[280px] lg:h-[280px] w-[220px] h-56">
      {!showVideo && (
        <Image
          src={imageURL}
          alt={imageURL}
          fill
          className={`rounded-2xl cursor-pointer object-cover ${imageClassName}`}
          onMouseEnter={() => setShowVideo(true)}
        />
      )}

      {showVideo && (
        <iframe
          className={`m-auto absolute inset-0 w-full h-[220px] lg:w-[280px] lg:h-[280px] rounded-2xl ${videoClassName}`}
          src={tranformVideoURL(videoURL)}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          onMouseLeave={() => setShowVideo(false)}
        />
      )}
    </div>
  );
}