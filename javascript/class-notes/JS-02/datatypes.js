console.log("Variables and Data Types");

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

//? =================  CONST  ======================
const numOfStudents = 5.5;
console.log(numOfStudents);
console.log(typeof numOfStudents);

const price = "5.5";
console.log(price);
console.log(typeof price);

// price = price + 1000 datatypes.js:18 Uncaught TypeError: Assignment to constant variable.
// at datatypes.js:18:7

// price++

counter = 9;
console.log(counter);
console.log(typeof counter);

const yazi1 = "Merhaba";
const yazi2 = "FS15";
const sonuc = yazi1 + yazi2;
console.log(sonuc);

const yazi3 = "10";
const yazi4 = 5;
const sonuc2 = yazi3 + yazi4;
console.log(sonuc2);

const yazi5 = 6;
const yazi7 = 7;
const sonuc3 = yazi5 + yazi7;
console.log(sonuc3);

//? Ancak bu tanımlama var ile yapılmış gibi olur

// NAN (Not  a Number)

// en az bir tanesi string ise concatination yapar!
//  Const ile tanımlanan degiskenin baslangicta degeri olmak zorundadır. Cunku sorandan atamak mumkun degildir

// const baslangic

// console.log(baslangic);

// price++ const oldugu için ikinci kez atama yapamıyoruz
//? ==================  LET  ========================

let sayac;
sayac = 5;
let kisi = 7;

console.log("SAYAC:" + sayac + " " + "KISI:" + kisi);
sayac = sayac + 5;
console.log(sayac);
sayac = true;
console.log(sayac);

let myNumber;
console.log(myNumber);

//? JS bir degiskenin türünü icerisindeki degere göre belirler.

//? null yokluk hiçlik

// let myNumber //? aynı scope içinde aynı degisken ismi ile atama yapmamıza izin vermiyor
//? ==================  VAR ==========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.
var coordinate = 100.01;
coordinate = 4;
console.log(coordinate);

// var yCord  //? Hoisting yukarı kaldırma

//? undefined

//? Hoisting yorum satırı yapsak da Hoisting eder

//? SCOPE ALANI ÖRENKLERİ
{
  let myNumber = 100;
  console.log("MYNUMBER=", myNumber);
}

console.log("MYNUMBER=", myNumber);

var z = 33;
{
  var z = 99; //= global degiskene deger atandı
}
console.log(z);

//? blok alani

//? global alandaki myNumber --undefined

//? var ile bir scope icerisinde degisken tanımlanfıgında bu degisken
//? scope a bagli olmaz (GLOBAL)

//? LET-CONST (BLOCK-SCOPE)
//? local degiskene deger aktarıldı

var sayi1 = 3;
let sayi2 = 4;
{
  var sayi1 = 333;
  let sayi2 = 444;
  console.log(sayi2);
}
console.log(sayi1, sayi2);

const ekmek = 2;
const yumurta = 30;
const peynir = 40;
const toplamHarcama = ekmek + yumurta + peynir;
console.log("TOPLAM HARCAMA:", toplamHarcama);
console.log(`TOPLAM HARCAMA= ${toplamHarcama}`);

// console.log(letVar); //? datatypes.js:113 Uncaught ReferenceError: letVar is not defined

//? global sayi 2

const maas = 70000;
const izinGunu = 30;
console.log(`MAAS=${maas}+SIGORTA, IZIN SURESI:${izinGunu} gun`);

console.log(`${maas - izinGunu * 500}`);
let y = 9;
console.log(++y);
