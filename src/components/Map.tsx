import { useScrollProgress } from "@toss/scroll-animation";
import NaverMap from "./NaverMap";
import { RefObject, useRef } from "react";

const MapSection = () => {
  const isPassed = useRef(false);
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.9,
    duration: "15vh",
    clip: true,
  });

  if (scrollYProgress >= 1) isPassed.current = true;

  const translateY = isPassed.current ? 0 : (1 - scrollYProgress) * 100;
  const opacity = isPassed.current ? 1 : scrollYProgress;

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        opacity: opacity,
      }}
      className="flex flex-col items-center justify-center px-8 pb-20 h-96"
    >
      <NaverMap />
      <div className="flex items-center justify-around w-full max-w-md py-2 text-sm font-normal rounded-b-lg bg-slate-600">
        <div className="flex items-center justify-center flex-1 border-r-2 border-r-gray-400">
          <span className="pr-2">네이버 맵</span>
          <a
            target="_blank"
            href="https://map.naver.com/p/entry/place/1861303497?lng=127.0251242&lat=37.5009917&placePath=%2Fhome%3Fentry%3Dpll&c=15.00,0,0,0,dh"
          >
            <img src="/naver.ico" className="w-[29px] h-[29px]" />
          </a>
        </div>
        <div className="flex items-center justify-center flex-1">
          <span className="pr-2">카카오 맵</span>
          <a target="_blank" href="https://kko.to/XFW0apO1k_">
            <img src="/kakao.ico" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
