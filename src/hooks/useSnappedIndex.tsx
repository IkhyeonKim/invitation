import { RefObject, useEffect, useRef, useState } from "react";
const TICK = 50;

const useSnappedIndex = (scrollContainer: RefObject<HTMLElement>) => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);
  const refNow = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainer.current) return;
      const now = Date.now();
      if (now - refNow.current < TICK) {
        refNow.current = now;
        return;
      }
      const copiedContainer = scrollContainer.current;

      const scrollLeft = copiedContainer.scrollLeft + 266;
      const children = copiedContainer.getElementsByClassName("gallery-item");

      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const childLeft = child.offsetLeft;
        const childWidth = child.offsetWidth;

        if (scrollLeft < childLeft + childWidth && scrollLeft >= childLeft) {
          setSnappedIndex(i);
          break;
        }
      }

      // console.log("hiiiiii", { scrollLeft, children });
    };

    if (!scrollContainer.current) return;
    const copiedContainer = scrollContainer.current;
    copiedContainer.addEventListener("scroll", handleScroll);

    return () => {
      copiedContainer.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainer]);

  if (!scrollContainer) return 0;
  if (!scrollContainer.current) return 0;

  return snappedIndex;
};

export default useSnappedIndex;
