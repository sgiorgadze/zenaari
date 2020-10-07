import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ top: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ top: e.clientY + 1 });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
