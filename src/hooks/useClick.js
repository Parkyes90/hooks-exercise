import { useEffect, useRef } from "react";

export default onClick => {
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (current) {
      current.addEventListener("click", onClick);
    }
    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};
