const swap = (a, b) => {
  let c = a;
  a = b;
  b = c;

  return [a, b];
};

const swapWithoutThird = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  return [a, b];
};

const [a, b] = swap(10, 20);

console.log(a, b);

const [c, d] = swapWithoutThird(20, 30);

console.log(c, d);
