const findElementNameById = (id, arrayOfElements) => {
  for (let element of arrayOfElements) {
    if (element._id == id) {
      return element.name;
    }
  }
  return undefined;
};

const findIdByKeyValue = (key, value, arrayOfElements) => {
  for (let element of arrayOfElements) {
    if (element[key] === value) {
      return element._id;
    }
  }
  return undefined;
};

const findAndDeleteByIdAndIndex = (arrayOfElements, index, element) => {
  for (let i = 0; i < arrayOfElements.length; i++) {
    if (arrayOfElements[i]._id === element._id) {
      if (i === index) {
        arrayOfElements.splice(i, 1);
      }
    }
  }
  return arrayOfElements;
};

export default { findElementNameById, findIdByKeyValue, findAndDeleteByIdAndIndex };
