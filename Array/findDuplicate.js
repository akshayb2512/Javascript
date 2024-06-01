const findDuplicate = (arr) => {
  const dupArr = [];
  arr.forEach((element) => {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      dupArr.push(element);
    }
  });
  return [...new Set(dupArr)];
};

console.log(findDuplicate([1, 1, 2, 3, 4, 4, 5, 5]));
