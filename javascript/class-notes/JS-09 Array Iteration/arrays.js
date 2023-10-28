/* -------------------------------------------------------------------------- */
/*                                  FOR LOOP                                  */
/* -------------------------------------------------------------------------- */

const notlar = [20, 55, 100, 89, 32];
let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log(`Dizideki sayıların toplamı ${toplam}`);

//? notlar dizisindekileri 50 den küçük büyük şeklinde ayır

//! const ellidenKucukler = [];
//! const ellidenBuyukler = [];

//! for (let i = 0; i < notlar.length; i++) {
//!   notlar[i] < 50
//     ? ellidenKucukler.push(notlar[i])
// !    : ellidenBuyukler.push(notlar[i]);
//! }

//! console.log(ellidenBuyukler);
//! console.log(ellidenKucukler);
//! console.log(notlar);

//? aynı örneği for in ile yapalım
// const ellidenKucukler = [];
// const ellidenBuyukler = [];

// for(let i in notlar){
//     if(notlar[i] < 50){
//         ellidenKucukler.push(notlar[i])
//     }else{
//         ellidenBuyukler.push(notlar[i])
//     }
// }
// console.log(ellidenBuyukler);
// console.log(ellidenKucukler);
// console.log(notlar);

/* -------------------------------------------------------------------------- */
/*                                ORNEK FOR OF                                */
/* -------------------------------------------------------------------------- */
const ellidenKucukler = [];
const ellidenBuyukler = [];

for (let not of notlar) {
  console.log(not);
  not < 50 ? ellidenKucukler.push(not) : ellidenBuyukler.push(not);
}
console.log(ellidenBuyukler);
console.log(ellidenKucukler);
console.log(notlar);

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

const ogrenciBul = (ad) => {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === ad ? sayac++ : "";
    // ogrenci=== ad && sayac++ //? short circuit yöntemi
  }
  const sonuc =
    sayac === 0 ? `${ad} bulunamamıstır` : `${ad}, ${sayac} adet bulunmuştur`;
  return sonuc;
};

console.log(ogrenciBul("ahmet"));
console.log(ogrenciBul("canan"));
