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

const findAndDeleteByIdAndIndex = (arrayOfElements, index, targetElement) => {
  let newArrayOfElements = [...arrayOfElements];
  if (newArrayOfElements[index]._id == targetElement._id) {
    newArrayOfElements.splice(index, 1);
  }
  return newArrayOfElements;
};

export default { findElementNameById, findIdByKeyValue, findAndDeleteByIdAndIndex };
