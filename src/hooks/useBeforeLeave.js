import { useEffect } from "react";

export default () => {
  const handle = () => {
    console.log("leaving");
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
