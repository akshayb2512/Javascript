const mergeArray = (arr1, arr2) => {
  const mergedArr = [...arr1, ...arr2];
  return [...new Set(mergedArr)];
};

console.log(mergeArray([1, 1, 2, 2, 3], [1, 2, 3, 3, 4, 5, 5]));
