function multiplesOf3and5(number) {
  const arr = [];
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i);
  }
  return arr.reduce((sum, curr) => sum + curr);
}

multiplesOf3and5(1000);

/*
passed
multiplesOf3and5(10) should return a number.

Passed
multiplesOf3and5(49) should return 543.

Passed
multiplesOf3and5(1000) should return 233168.

Passed
multiplesOf3and5(8456) should return 16687353.

Passed
multiplesOf3and5(19564) should return 89301183.
*/
