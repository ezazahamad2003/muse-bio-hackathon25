"use client";
import { useEffect, useRef, useState } from "react";

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  poster?: string;
  className?: string;
};

export default function Video({ src, poster, className, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onCanPlay = () => setLoaded(true);
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-soft ${className || ""}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        className={`h-full w-full object-cover ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        {...rest}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200/60" />
      )}
    </div>
  );
}
