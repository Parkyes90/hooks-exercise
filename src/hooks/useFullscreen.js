import { useEffect, useRef, useState } from "react";

export default () => {
  const [full, setFull] = useState(false);
  const element = useRef();
  const toggleFull = () => {
    setFull(!full);
  };
  useEffect(() => {
    if (full) {
      const { current } = element;
      if (current) {
        element.current.requestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [full]);
  return { element, toggleFull };
};
