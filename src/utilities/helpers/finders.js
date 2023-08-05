const findElementNameById = (id, arrayOfElements) => {
  for (let element of arrayOfElements) {
    if (element._id == id) {
      return element.name;
    }
  }
  return undefined;
};

export default { findElementNameById };
