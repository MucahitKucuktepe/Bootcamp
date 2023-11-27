// for (let i = 0; i < 2; i++) {
//   console.log(`Bir daha bunu yapmicam :D ${i}`);
// }

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// const n = +prompt("Kaç adet rasgele sayi bastirmak istersinzi:");

// for (let i = 1; i <= n; i++) {
//   const random = Math.random();
//   const randomSayi = Math.round(Math.random() * 100);
//   console.log(random);
//   console.log(`${i}. rasgele sayi : ${randomSayi}`);
// }

// // 2 aralıkta verilen dogal sayıların toplamını bulan kodu for dongusu ile yazınız

// // let n1 = 5;
// // let n2 = 15;
// // let toplam = 0;

// // for (let j = n1; j <= n2; j++) {
// //   toplam = toplam + j;

// // }
// let n1 = 5;
// let n2 = 15;
// let toplam = 0;
// console.log(toplam);

// for (n1; n1<=n2; n1++){
//   toplam += n1
// }
// console.log(toplam);
const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },
];

const kucuk = [];

kisiler.forEach((kisi) => {
  if (kisi.age < 33) {
    kucuk.push(kisi.name);
  }
});
console.log(kucuk);