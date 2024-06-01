const isPlaindrome = (num) => {
  const numArr = [...num.toString()];
  let isValid = true;
  for (i = 0; i < numArr.length / 2; i++) {
    if (numArr[i] === numArr[numArr.length - (i + 1)]) {
      continue;
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
};

const isPlaindromeString = (num) => {
  const revStr = num.toString().split(",").reverse().join(",");
  return num.toString() === revStr;
};

console.log(isPlaindrome(123454321));

console.log(`isPlaindromeString: ${isPlaindromeString(123454321)}`);
