import { useCallback, useEffect, useState } from "react";
import { getWindowDimensions } from "../utils/getWindowDimensions.js";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());

  const handleWindowResize = useCallback(() => {
    setWindowSize(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return windowSize;
};
