const pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0],
];

let countDifferent = 0;

for (let i = 0; i < pairs.length; i++) {
  let a = pairs[i][0];
  let b = pairs[i][1];

  let loose = a == b;
  let strict = a === b;

  console.log(`${JSON.stringify(a)} == ${JSON.stringify(b)} -> ${loose} | ${JSON.stringify(a)} === ${JSON.stringify(b)} -> ${strict}`);

  if (loose === true && strict === false) {
    countDifferent++;
  }
}

console.log("---");
console.log(`${countDifferent} paire(s) où == et === donnent des résultats différents`);