import { useLayoutEffect, useRef } from "react";

const Landing = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref) return;
    const copiedRef = ref;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      console.log("@@@@@@");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("!!!!!!", { entry });

          if (!copiedRef.current) return;
          // if (!copiedRef.current.style) return;
          copiedRef.current.style.opacity = "1";
          // intersectionCallback();
        }
      });
    }, options);

    if (copiedRef.current) {
      observer.observe(copiedRef.current);
    }

    return () => {
      if (copiedRef.current) observer.unobserve(copiedRef.current);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full pt-10 pb-24">
      {/* <svg className="absolute max-w-xs md:max-w-md" viewBox="0 0 360 360">
        <path
          id="half-circle"
          d="M 25 120 A 180 180 0 0 1 360 360"
          fill="transparent"
        />
        <text
          className="font-serif text-4xl font-extrabold"
          fill="#000928"
          width="360"
        >
          <textPath xlinkHref="#half-circle">Wedding Reception</textPath>
        </text>
      </svg> */}

      <div
        ref={ref}
        className="flex max-w-xs transition-opacity duration-500 delay-200 opacity-0 md:max-w-md"
      >
        <img src="./landing.png" />
      </div>
    </div>
  );
};

export default Landing;
