import type { LazyImageProps } from "@/types";
import { useEffect, useRef, useState } from "react";

const LazyImage = ({
  placeholderImg,
  id,
  src,
  alt,
  className,
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${className} overflow-hidden relative`} id={id}>
      {(isLoading || hasError) && placeholderImg && (
        <img
          src={placeholderImg}
          alt=""
          className="size-full object-cover absolute inset-0"
        />
      )}

      {(isLoading || hasError) && !placeholderImg && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[200%] w-full bg-pink-500 blur-2xl translate-x-2 -translate-y-7 rotate-45 animate-pulse" />
          <div className="h-[200%] w-full bg-red-500 blur-2xl rotate-45 animate-pulse" />
          <div className="h-[200%] w-full bg-white blur-2xl -translate-x-3 translate-y-7 rotate-45 animate-pulse" />
        </div>
      )}

      <img
        ref={imgRef}
        src={shouldLoad ? src : undefined}
        alt={alt}
        className={`size-full object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default LazyImage;
