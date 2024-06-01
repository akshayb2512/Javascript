const findCommon = (arr1, arr2) => {
  return arr1.some((val) => arr2.includes(val));
};

const isCOmmon = findCommon([1, 2, 3], [5, 6, 4]);

console.log(isCOmmon);
