import { useScrollProgress } from "@toss/scroll-animation";
import { RefObject } from "react";

const OurStory = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.8,
    duration: "15vh",
    clip: true,
  });

  const translateY = (1 - scrollYProgress) * 100;

  return (
    <div className="px-10 pt-12 pb-24 text-blue-950 bg-gradient-to-b from-zinc-50 to-white">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          opacity: scrollYProgress,
        }}
        className="duration-300"
      >
        <div>
          <p className="text-base leading-7">
            어렸을 때부터 하고 싶은 게 많았습니다. <br />
            이젠 그것을 함께하고 싶은 사람이 생겼습니다. <br />
            오셔서 축하해주세요. <br />
            <b>소중한 사람들을 초대합니다.</b>
          </p>
        </div>
        <div className="pt-8">
          <p className="text-base leading-7 tracking-wide">
            In the early days of global pandemic, of all times and places to
            meet, the bond between Ikhyeon and I only grew stronger.
          </p>
          <p className="pt-2 text-base leading-7 tracking-wide">
            I'm so grateful that I get to spend my life not only with an
            incredible man but with all of those closest to us. <br />
            <b>Thanks for coming out to party!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
