import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
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

  // const translateY = (1 - scrollYProgress) * 100;

  const onClickLeft = () => {
    setActiveIndex((i) => {
      if (i < 1) return i;
      else return i - 1;
    });
  };

  const onClckRight = () => {
    setActiveIndex((i) => {
      if (i > 4) return i;
      else return i + 1;
    });
  };

  let beSeen = false;
  if (scrollYProgress >= 1) beSeen = true;

  return (
    <div className="relative flex">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        style={{
          scrollSnapType: "x mandatory",
        }}
        className="py-16 overflow-x-scroll scroll-container"
      >
        <ul className="relative grid grid-flow-col gap-4 pl-12 list-none w-fit">
          <div
            className={`bg-red-400 w-72 h-80 transition-transform duration-500 delay-200 z-50 ${
              beSeen ? "scale-100" : "scale-75"
            }`}
          ></div>
          <div
            className={`bg-yellow-400 w-80 h-80 transition-transform duration-500 delay-200 z-40 translate-x-[-300px] ${
              beSeen ? "scale-100 translate-x-0" : "scale-75 translate-x-[-300px]"
            }`}
          ></div>
          <div
            className={`bg-green-400 w-[400px] z-30 h-80 transition-transform duration-500 delay-200 ${
              beSeen ? "scale-100" : "scale-75"
            }`}
          ></div>
          <div
            className={`bg-blue-400 w-96 h-80 transition-transform duration-500 delay-200 z-20 ${
              beSeen ? "scale-100" : "scale-75"
            }`}
          ></div>
          <div
            className={`bg-purple-400 w-72 h-80 transition-transform duration-500 delay-200 z-10 ${
              beSeen ? "scale-100" : "scale-75"
            }`}
          ></div>
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
          onClick={onClckRight}
        >
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
