// const dob = prompt("please enter your date of birth:")
// const name = prompt ("Please enter your name:")
// console.log(`${name} is ${new Date().getUTCFullYear- dob} years old`);
//!prompt fonksiyonu her seyi stirng olarak alır

// const r = Number(prompt("Please enter the radius:"));
// console.log(r);
// const PI = 3.14;
// const square = (Math.PI * r ** 2).toFixed(3); //? virgülden sonra 3 basamak alır
// console.log(`SQUARE= ${square}`);

//? prompt ın önüne + koyarak number yapabiliriz
//? Number() fonksiyonun içine alrak numberlaştırabiliriz.

//Math.floor(); //* her zaman en yakın alt tam sayıya yuvarlar
//Math.ceil(); //* her zaman en yakın ust tamsayıya yuvarlar
//Math.round(); //* en yakın tamsayıya yuvarlar.
//Math.trunc(); //* sayının tam kısmını alır.
//Math.random(); //* 0 ile 1 arasında rasgele sayı alır.

console.log(Math.ceil(123.1));
console.log(Math.round(Math.random() * 100));
console.log((123.456).toExponential(3)); //* üstel gösterim (string olarak)

//* ARTTIRMA VE AZALTMA (Inc, Dec)
//*--------------------------------

let number1 = 55;
number1++;
++number1;
number1 += 1;
console.log("NUMBER1:", number1);
console.log({ number1 });

//* --------------MOD ALMA İŞLEMİ------------
//* -----------------------------------------

const number2 = 10 % 3;
console.log(number2);

//? Girilen 3 basamaklı  sayının basamak degerleini bulan program

const number3 = 123;
const birler = number3 % 10;
console.log({ birler });

const onlar = Math.trunc(number3 / 10) % 10;

console.log({ onlar });

const yas = 20;
const cinsiyet = "E";

if (yas >= 20 && (cinsiyet === "E" || cinsiyet === "e")) {
  console.log("askere gitmeli");
} else {
  console.log("askere gitmeli");
}
const bos =""
console.log(Boolean(bos));

let number4 = ""
// if (!number4){
//     number4 = prompt("lutfen bir deger giriniz")
// }
// console.log(number4);

//? javascripte surekli olarak falsy deger donduren 6 deger bulunmaktadır.
const nal = null
const tanimsiz = undefined
const bos1 =""
const sayiDegil = NaN
const sifir = 0
const falsy = false


console.log(Number("1A23"));//? NaN
console.log(parseFloat("33eer123"));
