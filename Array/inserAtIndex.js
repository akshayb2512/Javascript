const insertAtIndex = (arr, index, num) => {
  arr.splice(index, 0, num);
  console.log(arr);
};

console.log(insertAtIndex([1, 2, 4], 2, 3));
