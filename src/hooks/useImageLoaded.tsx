import { useEffect, useState } from "react";

const useImageLoaded = (imgSrc: string) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      setImageLoaded(true);
    };
  }, [imgSrc]);

  return imageLoaded;
};

export default useImageLoaded;
