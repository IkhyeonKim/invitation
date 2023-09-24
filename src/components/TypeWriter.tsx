// Left curly brace: &#123;
// Right curly brace: &#125;

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { reservedKeywordsMap } from "../data/reservedKeywords";

const animationText = [
  "ffunction twoPeopleMet(person1, person2) {",
  "  if (person1.isQuit) return null;",
  "  else if (person2.isQuit) return null;",
  "  else return 'Let's have a celebration!';",
  "}}",
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

// const braces = ["(", ")", "{", "}"];

const TypeWriterAnimation = ({
  text,
  isRunning,
  myAnimationIndex,
  setCurrentAnimation,
}: {
  text: string;
  isRunning: boolean;
  myAnimationIndex: number;
  currentAnimation: number;
  setCurrentAnimation: Dispatch<SetStateAction<number>>;
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (!isRunning) return;
    let counter = 0;

    const interval = setInterval(() => {
      setCurrentText((prev) => {
        let nextText = prev + text[counter];

        reservedKeywords.forEach((keyword) => {
          const t = reservedKeywordsMap.get(keyword);
          if (!t) return;
          if (nextText.includes(t)) return;

          nextText = nextText.replace(keyword, t);
        });

        return nextText;
      });
      counter++;

      if (counter >= text.length - 1) {
        clearInterval(interval);
        setCurrentAnimation((prev) => {
          return prev + 1;
        });
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [text, setCurrentAnimation, isRunning]);

  if (!isRunning)
    return (
      <div
        dangerouslySetInnerHTML={{ __html: currentText }}
        className={`overflow-hidden text-sm leading-6 whitespace-nowrap ${
          [1, 2, 3].includes(myAnimationIndex) ? "pl-6" : ""
        }`}
      ></div>
    );

  return (
    <div
      dangerouslySetInnerHTML={{ __html: currentText }}
      className={`overflow-hidden text-sm leading-6 border-r w-fit whitespace-nowrap border-r-slate-400 ${
        [1, 2, 3].includes(myAnimationIndex) ? "pl-6" : ""
      }`}
    ></div>
  );
};

const TypeWriter = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  console.log;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-2 leading-7 text-white bg-black h-50">
        {animationText.map((text, index) => {
          return (
            <TypeWriterAnimation
              text={text}
              isRunning={index === currentAnimation}
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
            className="overflow-hidden text-sm leading-6 transition-opacity duration-500 border-r w-fit border-r-slate-400 animate-onlyBlink whitespace-nowrap"
          >
            <span className="font-bold text-slate-400">// Output: </span>{" "}
            <span className="text-red-500">Let's have a celebration!</span>
          </div>
        }
      </div>
    </div>
  );
};

export default TypeWriter;
