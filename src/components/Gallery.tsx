import { useScrollProgress } from "@toss/scroll-animation";
import { RefObject } from "react";
const Gallery = () => {
  // const ref = useRef<HTMLDivElement>(null);
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 0.8,
    duration: "20vh",
    clip: true,
  });

  const translateY = (1 - scrollYProgress) * 100;

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        opacity: scrollYProgress,
      }}
      className=""
    >
      <div className="pt-16">Gallery</div>
    </div>
  );
};

export default Gallery;
