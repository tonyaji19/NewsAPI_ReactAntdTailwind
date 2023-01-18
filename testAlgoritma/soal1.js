// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverse(str) {
  let number = str.slice(str.length - 1, str.length);
  let newStr = str.slice(0, str.length - 1).split("");
  let Array = newStr.reverse().join("");
  let result = Array + number;
  return result;
}

console.log(reverse("NEGIE1"));
console.log(reverse("EIGEN1"));
