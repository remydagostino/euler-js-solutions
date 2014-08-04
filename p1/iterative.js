var sum = 0,
    i;

for (i = (1000 - 1); i > 0; i--) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
// > 233168
