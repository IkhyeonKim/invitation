import { useScrollProgress } from "@toss/scroll-animation";
import { Dispatch, RefObject, SetStateAction, memo, useRef, useState } from "react";
import { reservedKeywordsMap } from "../data/reservedKeywords";
import useInterval from "../hooks/useInterval";

const animationText = [
  " function twoPeopleMet(person1, person2) {",
  "  if (person1.isQuit) return null;",
  "  else if (person2.isQuit) return null;",
  "  else return 'Let's have a celebration!';",
  "}",
  '  twoPeopleMet("Adam", "Ikhyeon")',
];

const reservedKeywords = [
  "function",
  "if",
  "else if",
  "else",
  "twoPeopleMet",
  "null",
  "return",
  "Let's have a celebration!",
];

const TypeWriterAnimation = memo(
  ({
    text,
    isRunning,
    shouldStart,
    myAnimationIndex,
    setCurrentAnimation,
  }: {
    text: string;
    isRunning: boolean;
    shouldStart: boolean;
    myAnimationIndex: number;
    currentAnimation: number;
    setCurrentAnimation: Dispatch<SetStateAction<number>>;
  }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useInterval(
      () => {
        if (!shouldStart) return;
        if (!isRunning) return;
        if (currentIndex >= text.length) {
          setCurrentAnimation((i) => i + 1);
          return;
        }

        setCurrentText((prevText) => {
          let nextText = prevText + text[currentIndex];

          reservedKeywords.forEach((keyword) => {
            const t = reservedKeywordsMap.get(keyword);
            if (!t) return;
            if (nextText.includes(t)) return;

            nextText = nextText.replace(keyword, t);
          });

          return nextText;
        });
        setCurrentIndex((i) => i + 1);
      },
      currentIndex > text.length ? null : 40
    );

    if (!isRunning)
      return (
        <div
          dangerouslySetInnerHTML={{ __html: currentText }}
          className={`overflow-hidden text-base break-keep leading-7 whitespace-nowrap ${
            [1, 2, 3].includes(myAnimationIndex) ? "pl-6" : ""
          }`}
        ></div>
      );

    return (
      <div
        dangerouslySetInnerHTML={{ __html: currentText }}
        className={`overflow-hidden text-base break-keep leading-7 border-r w-fit whitespace-nowrap border-r-slate-400 pr-0.5 ${
          [1, 2, 3].includes(myAnimationIndex) ? "pl-6" : ""
        }`}
      ></div>
    );
  }
);

const TypeWriter = () => {
  const isPassed = useRef(false);

  const [currentAnimation, setCurrentAnimation] = useState(0);
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: 1.2,
    duration: "15vh",
    clip: true,
  });

  if (scrollYProgress >= 1) isPassed.current = true;

  return (
    <div className="flex flex-col">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className="flex flex-col px-10 py-20 leading-7 text-color-1 bg-zinc-50 h-96"
      >
        <>
          {animationText.map((text, index) => {
            return (
              <TypeWriterAnimation
                text={text}
                isRunning={index === currentAnimation}
                shouldStart={isPassed.current}
                setCurrentAnimation={setCurrentAnimation}
                currentAnimation={currentAnimation}
                myAnimationIndex={index}
                key={index}
              />
            );
          })}
          {
            <div
              style={{
                opacity: `${currentAnimation === animationText.length ? 1 : 0}`,
              }}
              className="pr-1 overflow-hidden text-base leading-7 transition-opacity duration-500 break-keep w-fit whitespace-nowrap"
            >
              <span className="text-slate-400">// Output: </span>{" "}
              <span className="pr-1 text-base font-semibold text-red-500 border-r border-r-slate-300 animate-onlyBlink">
                Let's have a celebration!
              </span>
            </div>
          }
        </>
      </div>
    </div>
  );
};

export default TypeWriter;
