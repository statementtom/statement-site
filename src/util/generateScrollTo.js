const generateScrollTo = id => {
  let path = "/";
  if (typeof window !== "undefined") {
    path = `${window.location.pathname}#${id}`;
  }
  return path;
};

export default generateScrollTo;
