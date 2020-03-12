import { useEffect, useRef } from "react";

export default (duration = 3, delay = 1) => {
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};
