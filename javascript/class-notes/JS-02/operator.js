// console.log("OPERATORS");

// const maas = 7000
// const izinGunu = 30

// console.log(`MAAS=${maas} + SIGORTA , IZIN SURESİ: ${izinGunu}`)

// //? template literal ile bir JS  expression kullanmak mumkundur

// console.log(`${maas - izinGunu * 500}`);

// // y = y+1, y += 1 y++  hepsi aynidir

// // ? örnek
//  const name= prompt("Please enter your name:")
//  const dob = prompt("Enter your day of birth")
//  console.log(`${name} is ${new Date().getFullYear - dob} years old`);

// // ? Sistem saatini almak için Date() class'ı kullanılabilir.
// console.log(new Date().getFullYear);
// //! Prompt fonksiyonu verileri hep string alir.

//? Ornek
//?-------------------------------------
//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.

// ? Promptan gelen deger string oldugundan sayısal islemlerde kullanmak üzere Number'lastırmakta fayda vardır.
// ? 1- promptun önüne + koymak
// ? 2- Number() kullanmak
// const r = Number(prompt("Please enter the radius:"));

// const square2 = (Math.PI * r ** 2).toFixed(5); //? virgülden sonra 5 basamak alır
// console.log(`SQUARE= ${square2}`);

console.log(Math.round(123.556)); //?yakın tamsayıya yuvarlar
console.log(Math.ceil(123.26)); //?tavana yuvarlar
console.log(Math.floor(123.99)); //? tabana yuvarlar

console.log(Math.trunc(123.19)); //? her zaman tam kısmı alır
console.log((123.456).toFixed(2)); //? virgülden sonra iki basamak alır (string olarak gösterir)
console.log((123.456).toExponential(3)); //? üstel gösterim (string olarak)

//? Math.random() 0-1 arasında rasgele bir sayı üretir

console.log(Math.round(Math.random() * 100));

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

//* ARTTIRMA VE AZALTMA (Inc, Dec)
//*------------------------------------------------------

let number1 = 55;
number1 += 1;
number1++;
++number1;
console.log("NUMBER1:", number1);
console.log({ number1 });
//* MOD
//*--------------------------------------
const number2 = 10 % 3;
console.log({ number2 });

//?SORU: Girilen 3 basamakli sayinin basamak degerlerini bularak ayrı ayrı yazdiran kod
const number3 = 456;
const birler = number3 % 10;
console.log({ birler });

const onlar = Math.floor(number3 / 10) % 10;
console.log({ onlar });

const yuzler = Math.trunc(number3 / 100);
console.log({ yuzler });

//*===================================================================================
//*                                 KARSILASTIRMA OPERATORLERI
//*===================================================================================

console.log(5 == "5"); //? true
console.log(5 === "5"); //? false type karsılastırması da yapıyor
console.log(4 != 5); //? true
console.log(4 != "4"); //? false
console.log(4 !== "4"); //? true

console.log(4 > 4); //? false
console.log(4 >= 4); //? True
console.log(4 <= 4); //? True

//*===================================================================================
//*                                 MANTIKSAL OPERATORLER
//*===================================================================================
console.log("** LOGIC **");
const d1 = true;
const d2 = false;

console.log(d1 && d2); //? FALSE
console.log(d1 || d2 || false || false); //? TRUE

console.log(!d2); //? true

const yas = 18;
const cinsiyet = "E";
if ((yas >= 18) && (cinsiyet === "E" || cinsiyet === "e")){
  console.log("Askere gitmeli");
} else {
  console.log("gerek yok");
}

//? Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null
const tanimsiz = undefined
const bos = ""
const sayiDegil = NaN
const sifir = 0
const falsy = false


console.log(Boolean(0));
console.log(!0); //? True

console.log(Boolean(undefined));//? false

let number4 ="" //? aslında burda null var yada falsy deger var

if(!number4){ //? number4 yoksa (false ise)
    number4 = prompt("lutfen bir deger giriniz.")
}

const number5 = -5
console.log(Boolean(number5)); //? true


//*===================================================================================
//*                                TIP DONUSUMLERI
//*===================================================================================

const kimlikNo ="1234567890"
const kimlikNo ="1234567890"
const numberKimlikNo = Number (kimlikNo)
console.log(numberKimlikNo);

const parite ="1.2"
const tl = "1200"

const total = Number(parite) + Number(tl)
const total1 = parseFloat (parite) + parseInt(tl)
console.log(total1);

console.log(Number("1A23"));
