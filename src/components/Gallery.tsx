import { useScrollProgress } from "@toss/scroll-animation";
import { RefObject, useRef } from "react";
import useSnappedIndex from "../hooks/useSnappedIndex";

const getOpacityClass = (
  beSeen: boolean,
  currentIndex: number,
  index: number
) => {
  if (!beSeen) return "opacity-100";
  if (currentIndex === index) return "opacity-100";
  return "opacity-30";
};

const Gallery = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.6,
    duration: "20vh",
    clip: true,
  });
  const beSeen = useRef(false);

  const scrollContainer = useRef<HTMLDivElement>(null);
  const currentIndex = useSnappedIndex(scrollContainer);

  if (scrollYProgress >= 1) beSeen.current = true;

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="relative flex flex-col bg-gradient-to-b from-color-1 to-slate-800"
    >
      <div className="pb-10 font-light text-center text-white pt-28">
        <p className="text-sm">Some memories from the past few years</p>
      </div>
      <div
        ref={scrollContainer}
        style={{
          scrollSnapType: "x mandatory",
        }}
        className="pb-16 overflow-x-scroll scroll-container"
      >
        <ul className="relative grid grid-flow-col gap-4 pl-20 pr-20 sm:pl-[30%] sm:pr-[30%] list-none w-fit">
          <li
            className={`gallery-item flex justify-center w-60 h-[340px] transition-all duration-500 delay-100 z-50 
            ${beSeen.current ? "scale-100" : "scale-90"}
            ${getOpacityClass(beSeen.current, currentIndex, 0)}`}
          >
            <img src="../bridge.JPG" />
          </li>
          <li
            className={`gallery-item flex justify-center w-[435px] z-30 h-[340px] transition-all duration-500 delay-100 
            ${
              beSeen.current
                ? "scale-100 translate-x-0"
                : "scale-75 translate-x-[-360px]"
            }
            ${getOpacityClass(beSeen.current, currentIndex, 1)}`}
          >
            <img src="../hwasung.JPG" />
          </li>
          <li
            className={`gallery-item flex justify-center w-64 h-[340px] transition-all duration-500 delay-100 z-10 
            ${
              beSeen.current
                ? "scale-100 translate-x-0"
                : "scale-75 translate-x-[-660px]"
            }
            ${getOpacityClass(beSeen.current, currentIndex, 2)}`}
          >
            <img src="../omg.JPG" />
          </li>
          <li
            className={`gallery-item flex justify-center w-[435px] h-[340px] transition-all duration-500 delay-100 z-20 
            ${
              beSeen.current
                ? "scale-100 translate-x-0"
                : "scale-75 translate-x-[-1060px]"
            }
            ${getOpacityClass(beSeen.current, currentIndex, 3)}`}
          >
            <img src="../inwang.jpg" />
          </li>
          <li
            className={`gallery-item flex justify-center w-[194px] h-[340px] transition-all duration-500 delay-100 z-20 
            ${
              beSeen.current
                ? "scale-100 translate-x-0"
                : "scale-75 translate-x-[-1300px]"
            }
            ${getOpacityClass(beSeen.current, currentIndex, 4)}`}
          >
            <img src="../hmmm.JPG" />
          </li>
          <li
            className={`gallery-item flex justify-center w-[435px] h-[340px] transition-all duration-500 delay-100 z-20 
            ${
              beSeen.current
                ? "scale-100 translate-x-0"
                : "scale-75 translate-x-[-1680px]"
            }
            ${getOpacityClass(beSeen.current, currentIndex, 5)}`}
          >
            <img src="../brunch.JPG" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
