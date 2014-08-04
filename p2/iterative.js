var sum = 0,
    i, prev, temp;

prev = 1;
i    = 1;

while (i < 4000000) {
  if (i % 2 === 0) {
    sum += i;
  }

  temp = i;
  i    = i + prev;
  prev = temp;
}

console.log(sum);
// > 4613732
