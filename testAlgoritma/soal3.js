// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:
// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']
// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];

let countQueryonInput = 0;
let resultCount = [];
let resultWord = `OUTPUT = Karena `;

for (a = 0; a <= QUERY.length - 1; a++) {
  for (b = 0; b <= INPUT.length - 1; b++) {
    if (QUERY[a] === INPUT[b]) {
      countQueryonInput += 1;
    } else {
      countQueryonInput += 0;
    }
  }
  resultCount.push(countQueryonInput);
  countQueryonInput = 0;
  resultWord += ` kata '${QUERY[a]}' terdapat ${resultCount[a]} pada Input, `;
}

console.log(resultWord);
