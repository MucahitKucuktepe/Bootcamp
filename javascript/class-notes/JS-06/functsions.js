//? bu yöntemde hoisting olmadıgı için önce fonksiyonun tanımlanması sonra kullanılması gerekir

const topla = function (a, b) {
  return a + b;
};

console.log("TOPLAM:", topla(3, 6));
/* -------------------------------------------------------------------------- */
/*                                    ORNEK                                   */
/* -------------------------------------------------------------------------- */

const tekVeyaCift = function (num) {
  const result = num % 2 === 0 ? "TEK" : "CIFT";
  return `${num} ${result} dir`;
};
console.log(tekVeyaCift(5));

const bulEnBuyuk = function (s1, s2, s3) {
  return Math.max(s1, s2, s3);
};
console.log(bulEnBuyuk(2, 3, 4));

/* -------------------------------------------------------------------------- */
/*                                   ARROWS                                   */
/* -------------------------------------------------------------------------- */

const kareAl = (num) => num ** 2;
console.log(kareAl(4));

const yaz = () => console.log("Hello");
yaz();
const hesapla = (x, y) => {
  const toplam = x + y;
  const carpım = x * y;
  const sonuc = toplam / carpım;
  return sonuc;
};

console.log(hesapla(4, 8));
const yasHesapla = (dob) => new Date().getFullYear() - dob;
console.log("YAS:", yasHesapla(1991));
console.log(new Date().getFullYear());

const silindirHacim = (r, h) => Math.PI * r * r * h;

console.log(`Hacim= ${silindirHacim(2, 3)}`);
const topla1 = (a, b) => a + b;
const cıkar = (a, b) => a - b;
const carp = (a, b) => a * b;
const bol = (a, b) => a / b;

const hesapMakinesi = (num1, num2, op) => {
  let result = 0;
  switch (op) {
    case "+":
      result = topla(num1, num2);
      break;
    case "-":
      result = cıkar(num1, num2);
      break;
    case "*":
      result = carp(num1, num2);
      break;
    case "/":
      result = bol(num1, num2);
      break;
    default:
      alert("yanlıs operator girişi!");
      break;
  }
  return result;
};

const num1 = +prompt("1.sayi:");
const num2 = +prompt("2.sayi:");
const op = prompt("İşlemi girniz: + - * /");

console.log(hesapMakinesi(num1, num2, op));

console.log(`${num1} ${op} ${num2} = ${hesapMakinesi(num1, num2, op)}`);

/* -------------------------------------------------------------------------- */
/*                                    SCOPE                                   */
/* -------------------------------------------------------------------------- */

let num3 = 11;
let num4 = 22;

const funk1 = () => {
  let num1 = 44;
  num1++;
  return num1;
};
const num5 = funk1();
console.log(num5);
