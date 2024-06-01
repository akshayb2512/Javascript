const sumOfArr = (arr) => {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum;
};

const sumRecursion = (arr) => {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursion(arr.splice(1));
};

console.log(sumOfArr([1, 1, 3]));

console.log(`sumRecursion:${sumRecursion([1, 2])}`);
