export const linkResolver = (type, uid, date = null) => {
  if (uid === 'home') {
    return `/`;
  }
  if (uid === 'contact-us') {
    return '/contact-us/';
  }
  if (type === 'page') {
    return `/${uid}/`;
  }
  if (type === 'case') {
    return `/results/${uid}/`;
  }
  if (type === 'event') {
    return `/events/${uid}/`;
  }
  if (type === 'career') {
    return `/careers/${uid}/`;
  }
  if (type === 'article') {
    return `/blog/${date}/${uid}/`;
  }
  if (type === 'resource') {
    return `/resource/${uid}/`;
  }
  return '/';
};
