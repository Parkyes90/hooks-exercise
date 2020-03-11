export default (message = "", callback, reject) => {
  return () => {
    if (window.confirm(message)) {
      callback();
    } else {
      reject();
    }
  };
};
