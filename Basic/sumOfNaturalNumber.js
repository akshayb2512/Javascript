const sumByLoop = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const sumByFactorial = (n) => (n * (n + 1)) / 2;

const sumByRecursion = (n) => {
  if (n !== 0) {
    return n + sumByRecursion(n - 1);
  } else {
    return n;
  }
};

const sum = sumByLoop(5);
console.log(`sumByLoop: ${sum}`);

const sum2 = sumByFactorial(5);
console.log(`sumByFactorial: ${sum2}`);

const sum3 = sumByRecursion(5);
console.log(`sumByRecursion: ${sum3}`);
