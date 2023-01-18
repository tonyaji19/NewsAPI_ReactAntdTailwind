// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Contoh:

// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

// maka hasilnya adalah 15 - 12 = 3

function diagonalDifference(arr) {
  let dia1 = 0;
  let dia2 = 0;
  let j = arr.length;

  for (let i = 0; i < arr.length; i++) {
    j--;
    dia1 += arr[i][i];
    dia2 += arr[i][j];
  }

  let res = Math.abs(dia1 - dia2);

  return `diagonal pertama = ${dia1}, 
    diagonal kedua = ${dia2}, 
    maka hasilnya adalah ${dia1} - ${dia2} = ${res}`;
}

console.log(
  diagonalDifference([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
