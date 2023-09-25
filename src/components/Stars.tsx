const Stars = () => {
  return (
    <>
      <div className="absolute w-0.5 h-0.5 bg-zinc-400 rounded-full top-14 left-1/4 animate-twinkle" />
      <div
        className="absolute w-1 h-1 rounded-full bg-zinc-200 top-20 left-[40%] animate-twinkle"
        style={{
          animationDelay: "500ms",
        }}
      />
      <div
        className="absolute w-[3px] h-[3px] rounded-full bg-zinc-300 top-20 left-[26%] animate-twinkle"
        style={{
          animationDelay: "600ms",
        }}
      />
      <div
        className="absolute w-0.5 h-0.5 rounded-full bg-zinc-200 top-12 left-[40%] animate-twinkle"
        style={{
          animationDelay: "200ms",
        }}
      />
      <div
        className="absolute w-[3px] h-[3px] rounded-full bg-zinc-100 top-24 left-[34%] animate-twinkle"
        style={{
          animationDelay: "300ms",
        }}
      />
      <div
        className="absolute w-1 h-1 rounded-full bg-zinc-50 top-16 left-1/3 animate-twinkle"
        style={{
          animationDelay: "100ms",
        }}
      />
      <div
        className="absolute w-[3px] h-[3px] rounded-full bg-zinc-400 top-11 left-[28%] animate-twinkle"
        style={{
          animationDelay: "300ms",
        }}
      />
    </>
  );
};

export default Stars;
