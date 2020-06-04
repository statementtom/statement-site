const generateContent = content => {
  let htmlString = "";
  const keys = Object.keys(content);
  keys.forEach(key => {
    if (content[key]) {
      const strippedKeyValue = content[key].replace(/(<([^>]+)>)/gi, "");
      if (strippedKeyValue) {
        htmlString += content[key];
      }
    }
  });
  return htmlString;
};

export default generateContent;
