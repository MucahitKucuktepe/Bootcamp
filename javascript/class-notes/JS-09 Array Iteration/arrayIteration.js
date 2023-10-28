/* -------------------------------------------------------------------------- */
/*                               FOR EACH METHOD                              */
/* -------------------------------------------------------------------------- */

console.log("FOR EACH METHODS");
let array = [4, 2, 6, 7];

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500];
for (let price of prices) {
  console.log(price);
}
console.log("*****************************************");
//?for each

prices.forEach((price) => console.log(price * 1.1));

prices.forEach((price, index) => console.log("DEGER:", price, "SIRA", index));

prices.forEach((p, i, arr) => {
  if (arr[i] < 270) {
    console.log((arr[i] = p * 1.1));
  }
});
console.log(prices);
//?dizinin elemanlarını toplama
let sum = 0;
prices.forEach((price) => (sum += price));
console.log(sum);

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperCasedNames = names.map((n) => n.toUpperCase());
console.log(upperCasedNames);
console.log(names);
let upperNames = [];
names.forEach((n, i) => (upperNames[i] = n.toLocaleLowerCase()));
console.log(upperNames);

let adlar = [];
names.forEach((ad) => adlar.push(ad.toUpperCase()));
console.log(adlar);

//?--------------------------ÖRNEK--------------
//?tlprices dizisindeki rakamların euro ve dolar karsılıklarını hesaplatarak yeni dizilere

const euro = 29.8;
const dolar = 27.97;

const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
console.log(dolarPrices);

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));
console.log(euroPrices);

const maaslar = [5500, 8000, 6500, 9000, 15000, 25000];

const buyukOnbin = maaslar.filter((m) => m > 10000);
console.log(buyukOnbin, maaslar);

//? maası 8000-10000 arasındakileri ayrı bir dizide saklayınız

const aradakiler = maaslar.filter((m) => (m) >= 8000 && m <= 10000);
console.log(aradakiler);

const dokuzBindenAz = maaslar.filter((m)=> m< 9000).map((m)=> m*1.5)
console.log(dokuzBindenAz);

//* -------------------------------------------------------------------------- */
//*                                   REDUCE                                   */
//* -------------------------------------------------------------------------- */
console.log("******* Objects *********")

let arr=[4,3,2,5]
let arr2= arr.reduce((acc,val)=> acc*val,1)
console.log(arr2);
let result
let arr3= arr.reduce((a,b,i)=>{
    result=`${i} ${a+b}`
    console.log(result);
    return a+b
})
console.log("TOTAL:", arr3);



const salaries= [10000, 15000, 9000, 20000]

// const zamliMaasToplami= salaries.filter((s)= s=>9000 && s<15000).map((o)=>o*1.2).reduce((sum,sal)=> sum+sal)

// console.log(zamliMaasToplami);

const yeniMaas= salaries.filter((s) => s>=9000 && s<=15000).map((m)=> m*1.2).reduce((a,b)=> a+b ,0)
console.log(yeniMaas);






// //* =======================================
// //*               OTHERS
// //* =======================================

// //* every()
// //*-----------------------------------------------------------
// //? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
// //? test gerceklestirir.Tum elemanlar icin test basarili ise
// //? true aksi takdirde false deger dondurur.

// const ages = [18, 22, 78, 34, 78, 79, 15]
// const check = ages.every((age) => age >= 18)
// check ? console.log("All ages are over 18") : console.log("Sum are under 18")

// //* some()
// //*-----------------------------------------------------------
// //? Aldigi callback fonksiyonuna gore test gerceklestirir.
// //? En az bir eleman icin bile test basarili ise true aksi
// //? takdirde false deger dondurur.

// const over80 = ages.some((a) => a >= 80)
// console.log(over80) //? false

// //* find(), findLast()
// //*-----------------------------------------------------------
// //? Aldigi callback fonksiyonuna gore test gerceklestirir.
// //? Kosulu saglayan ilk dizi elemaninin dondurur.
// //? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

// //?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
// const ageBigThan30First = ages.find((age) => age >= 30)
// const ageBigThan30Last = ages.findLast((age) => age >= 30)
// console.log(ageBigThan30First, ageBigThan30Last)

// console.log(ages.find((age) => age >= 80)) //? undefined

// //* findIndex()
// //*-----------------------------------------------------------
// //? Aldigi callback fonksiyonuna gore test gerceklestirir.
// //? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
// //? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

// //?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

// const foundIndex = ages.findIndex((age) => age > 18)
// console.log(foundIndex) //? 1








