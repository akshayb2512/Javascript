const isEqual = (arr1, arr2) => {
  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};

console.log(isEqual([1, 2, 3], [1, 2, 4]));
