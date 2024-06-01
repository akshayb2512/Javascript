const isArmstrong = (num) => {
  const numArr = [...num.toString()];
  const numLength = numArr.length;

  const sum = numArr.reduce((acc, curr) => acc + Math.pow(curr, numLength), 0);

  return sum === num;
};

console.log(isArmstrong(9474));
