import { createPortal } from "react-dom";
import useImageLoaded from "../hooks/useImageLoaded";
import { useEffect, useLayoutEffect, useRef } from "react";

const Landing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const colorBgRef = useRef<HTMLDivElement>(null);

  const isImageLoaded = useImageLoaded("../gyungju-grayscale_compressed.jpg");

  useLayoutEffect(() => {
    if (!ref) return;
    const copiedRef = ref;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!copiedRef.current) return;
          copiedRef.current.style.opacity = "1";
        }
      });
    }, options);

    if (copiedRef.current) {
      observer.observe(copiedRef.current);
    }

    return () => {
      if (copiedRef.current) observer.unobserve(copiedRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!colorBgRef.current) return;

      const scrollTop = window.scrollY;
      if (scrollTop > 360) return;

      const targetValue = 360;
      const progress = (scrollTop * 100) / targetValue;
      colorBgRef.current.style.opacity = (progress * 0.01).toString();
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div
          ref={ref}
          className="relative max-w-3xl flex flex-col items-center w-full transition-opacity duration-500 delay-200 bg-center bg-no-repeat bg-cover opacity-0 h-96 max-h-[430px] bg-gyungju-grayscale_compressed"
        ></div>
        <div
          ref={colorBgRef}
          className="absolute z-10 max-w-3xl flex flex-col items-center w-full transition-opacity duration-[30ms] bg-center bg-no-repeat bg-cover opacity-0 h-96 max-h-[430px] bg-gyungju-color_compressed"
        ></div>
      </div>
      {!isImageLoaded &&
        createPortal(
          <div className="fixed top-0 flex items-center justify-center w-full h-full bg-white bg-opacity-80 z-[99999] transition-opacity duration-300">
            <div className="border-[6px] border-gray-400 rounded-full w-12 h-12 animate-spin border-t-color-5" />
          </div>,
          document.body
        )}
    </>
  );
};

export default Landing;
