const generateSectionSize = size => {
  switch (size) {
    case "default":
      return "small";
    case "medium":
      return "medium";
    case "large":
      return "large";
    default:
      return "small";
  }
};

export default generateSectionSize;
