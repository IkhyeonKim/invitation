import { useScrollProgress } from "@toss/scroll-animation";
import { RefObject } from "react";

const Title = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.8,
    duration: "20vh",
    clip: true,
  });

  const translateY = (1 - scrollYProgress) * 100;

  return (
    <div className="pb-10">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          opacity: scrollYProgress,
        }}
        className="pt-32 font-serif text-5xl font-normal text-center transition-opacity duration-500 delay-100 sm:text-6xl"
      >
        INVITATION
      </div>
      <div className="w-full text-sm leading-7 text-center">
        You're invited to Adam & Ikhyeon's wedding reception
      </div>
    </div>
  );
};

export default Title;
