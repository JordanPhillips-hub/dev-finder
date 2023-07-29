import { useState, useEffect } from "react";

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowWidth);
    return () => window.removeEventListener("resize", handleWindowWidth);
  }, []);

  return windowWidth;
}
