import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useSnappedIndex from "../hooks/useSnappedIndex";
import { useScrollProgress } from "@toss/scroll-animation";
import { useRef, RefObject, useState } from "react";
const Gallery = () => {
  // const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.8,
    duration: "20vh",
    clip: true,
  });

  const scrollContainer = useRef<HTMLDivElement>(null);
  const currentIndex = useSnappedIndex(scrollContainer);
  // const translateY = (1 - scrollYProgress) * 100;

  const onClickLeft = () => {
    setActiveIndex((i) => {
      if (i < 1) return i;
      else return i - 1;
    });
  };

  const onClickRight = () => {
    setActiveIndex((i) => {
      if (i > 4) return i;
      else return i + 1;
    });
  };

  console.log(activeIndex);

  let beSeen = false;
  if (scrollYProgress >= 1) beSeen = true;

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="relative flex">
      <div
        ref={scrollContainer}
        style={{
          scrollSnapType: "x mandatory",
        }}
        className="py-32 overflow-x-scroll scroll-container bg-gradient-to-b from-color-1 to-slate-800"
      >
        <ul className="relative grid grid-flow-col gap-4 pl-20 pr-20 sm:pl-[30%] sm:pr-[30%] list-none w-fit">
          <li
            className={`gallery-item bg-red-400  flex justify-center w-60 h-80 transition-all duration-300 delay-50 z-50 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 0 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../bridge.JPG" />
          </li>
          <li
            className={`gallery-item bg-green-400  flex justify-center w-[425px] z-30 h-80 transition-all duration-300 delay-50 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 1 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../hwasung.JPG" />
          </li>
          <li
            className={`gallery-item bg-purple-400  flex justify-center w-60 h-80 transition-all duration-300 delay-50 z-10 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 2 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../omg.JPG" />
          </li>
          <li
            className={`gallery-item bg-blue-400  flex justify-center w-[425px] h-80 transition-all duration-300 delay-50 z-20 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 3 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../inwang.jpg" />
          </li>
          <li
            className={`gallery-item bg-blue-400  flex justify-center w-44 h-80 transition-all duration-300 delay-50 z-20 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 4 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../hmmm.JPG" />
          </li>
          <li
            className={`gallery-item bg-blue-400  flex justify-center w-[425px] h-80 transition-all duration-300 delay-50 z-20 ${
              beSeen ? "scale-100" : "scale-75"
            } ${currentIndex === 5 ? "opacity-100" : "opacity-50"}`}
          >
            <img src="../brunch.JPG" />
          </li>
        </ul>
      </div>
      <div className="absolute flex gap-2 bottom-4 right-4">
        <div
          className="flex items-center justify-center bg-blue-900 rounded-full"
          onClick={onClickLeft}
        >
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </div>
        <div
          className="flex items-center justify-center bg-blue-900 rounded-full"
          onClick={onClickRight}
        >
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
