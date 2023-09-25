import { useEffect, useLayoutEffect, useRef } from "react";

const Landing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const colorBgRef = useRef<HTMLDivElement>(null);

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
          // intersectionCallback();
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
      if (scrollTop > 350) return;

      const targetValue = 260;
      const progress = (scrollTop * 100) / targetValue;
      colorBgRef.current.style.opacity = (progress * 0.01).toString();
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        ref={ref}
        className="relative max-w-3xl flex flex-col items-center w-full transition-opacity duration-500 delay-200 bg-center bg-no-repeat bg-cover opacity-0 h-96 max-h-[430px] bg-gyungju-grayscale"
      ></div>
      <div
        ref={colorBgRef}
        // ref={colorRef as RefObject<HTMLDivElement>}
        className="absolute z-10 max-w-3xl flex flex-col items-center w-full transition-opacity duration-[30ms] bg-center bg-no-repeat bg-cover opacity-0 h-96 max-h-[430px] bg-gyungju-color"
      ></div>
    </div>
  );
};

export default Landing;
