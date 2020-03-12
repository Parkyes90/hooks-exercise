import { useEffect, useState } from "react";

export default () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  let timer = null;
  const onScroll = () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        setState({ x: window.scrollX, y: window.scrollY });
      }, 250);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return state;
};
