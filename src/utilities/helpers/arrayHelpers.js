const swapItems = (array, index1, index2) => {
  let newArray = [...array];
  let temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;

  return newArray;
};

const filterSearch = (searchTerm, key, array) => {
  let filteredArray = [...array].filter((element) => {
    return element[key].toLowerCase().startsWith(searchTerm.toLowerCase());
  });
  return filteredArray;
};

const matchesCategory = (categoryName, array) => {
  let filteredArray = [...array].filter((element) => {
    return element.category === categoryName;
  });
  return filteredArray;
};

const matchesBodyPart = (bodyPartName, array) => {
  let filteredArray = [...array].filter((element) => {
    return element.bodyPart === bodyPartName;
  });
  return filteredArray;
};

export default { swapItems, filterSearch, matchesCategory, matchesBodyPart };
