const validate = (value, { name, type }) => {
  let error;
  switch (type) {
    case "text":
      if (!value) {
        error = `${name} can't be blank`;
      }
      console.log(error);
      return error || true;
    default:
      return false;
  }
};

export default validate;
