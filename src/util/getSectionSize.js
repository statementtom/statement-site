const getSectionSize = size => {
  switch (size) {
    case "small":
      return "3rem 1.5rem";
    case "medium":
      return "6rem 1.5rem";
    case "large":
      return "9rem 1.5rem";
    default:
      return "3rem 1.5rem";
  }
};

export default getSectionSize;
