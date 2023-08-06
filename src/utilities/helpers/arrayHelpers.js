const swapItems = (array, index1, index2) => {
  let newArray = [...array];
  let temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;

  return newArray;
};

export default { swapItems };
