const getInterection = (a1, a2) => {
  const arr = [...a1, ...a2];
  const retArr = [];
  arr.forEach((el) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      retArr.push(el);
    }
  });
  return [...new Set(retArr)];
};

const getInterectionReduce = (a1, a2) => {
  return a1.reduce((acc, curr) => {
    if (a2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(getInterection([1, 2, 3], [4, 2, 5]));

console.log(getInterectionReduce([1, 2, 3], [4, 2, 5]));
