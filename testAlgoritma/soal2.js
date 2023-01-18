// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// Contoh:

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence)
// // mengerjakan: 11 character

function longestSentence(str) {
  let count = 0;
  let word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > count) {
      str = word[i];
      count = word[i].length;
    }
  }

  return "kata => " + str + ", terdiri dari " + count + " character.";
}

console.log(longestSentence("Saya sangat senang mengerjakan soal algoritma"));
console.log(
  longestSentence(
    "Saya sangat senang berfikir soal algoritma dalam bahasa Indonesia"
  )
);
