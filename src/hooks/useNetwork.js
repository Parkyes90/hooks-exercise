import { useEffect, useState } from "react";

export default (onChange = () => {}) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    onChange(navigator.onLine);
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("offline", handleChange);
      window.removeEventListener("online", handleChange);
    };
  });
  return status;
};
