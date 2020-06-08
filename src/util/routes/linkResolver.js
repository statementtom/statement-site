const linkResolver = () => doc => {
  if (doc.type === "page") {
    return `/${doc.uid}/`;
  }
  if (doc.type === "case") {
    return `/results/${doc.uid}/`;
  }
  if (doc.type === "event") {
    return `/events/${doc.uid}/`;
  }
  if (doc.type === "career") {
    return `/careers/${doc.uid}/`;
  }
  if (doc.type === "resource") {
    return `/resource/${doc.uid}/`;
  }
  // Backup for all other types
  return "/";
};

module.exports.linkResolver = linkResolver;
