const removeDups = (arr) => {
  return [...new Set(arr)];
};

const removeDupsLoop = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i] === -1)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(removeDups([1, 1, 2]));

console.log(`removeDupsLoop: ${removeDupsLoop[(1, 2, 3, 3)]}`);
