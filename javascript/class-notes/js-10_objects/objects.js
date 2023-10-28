//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.
console.log("*** Objects***");

//?Array ile ilişkili veriler

const cars = ["Audi", "BMW", "Anadol"];
const brand = ["Q8", "3 20", "Lux"];
const engines = [4000, 2000, 1600];
const speed = [8, 7, 4];
const power = ["hybrid", "electricity", "Fuel+LPG"];

console.log(cars[0], brand[0], engines[0], speed[0]);

//?Objects

const arac = {
  marka: "Audi",
  model: "Q8",
  motor: 4000,
  vites: 8,
  colors: ["pink", "black", "gray"],
  power: { fossil: "benzin", green: "Elektrik" },
};
//?objelere erişimin 2 yöntemi vardır

console.log(arac.marka);
console.log(arac.model);
console.log(arac.colors[2]);
console.log(arac.power.fossil);
// const key =prompt("Aracın hangi bilgisini öğrenmek istersiniz , marka model motor, vites?")
// //?Square braket yöntemi
// console.log(arac[key]);

arac.model = "Q3";
console.log(arac);
arac.power["fossil"] = "mazot";
console.log(arac);
arac.sunroof = true;
console.log(arac);
console.log(arac["vites"]);
console.log(arac["sunroof"]);


//* =========================================================================== */
//*                               Object Methods                               */
//* ========================================================================== */

const personel = {
  adı: "Ahmet",
  soyadi: "CAN",
  dogum: 1990,
  maas: 1500,
  ehliyet: true,
  diller: ["English", "German"],
  yasHesapla: function () {
    console.log(this);
    return new Date().getFullYear() - this.dogum;
  },
  //!   ozet:()=>{
  //!     return `${this.adı} ${this.soyadi} ${this.yasHesapla()} yasindadir`
  //!   },
  ozet: function () {
    return `${this.adı} ${this.soyadi} ${this.yasHesapla()} yasindadir`;
  },
};
console.log(personel.yasHesapla());
//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

//* =========================================================================== */
//*              JASON JAVASCRİPT OBJECT NOTATİON                              */
//* ========================================================================== */

const peopleJSON = [
  { adi: "Ahmet", soyadi: "Can" },
  { adi: "Canan", soyadi: "Can" },
];

console.log(peopleJSON[0].adi);

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];

team.forEach((t) => console.log(t.job));
//?isimleri bir diziye saklayalım
const names = team.map((t) => t.name);
console.log(names);
//?kişilerin yaş toplamını bulalım

const totalAge= team.reduce((acc,p)=> acc + p.age,0)
console.log(totalAge);

// const toplamYas = team.reduce((acc, p) => acc + p.age, 0);
// console.log(toplamYas);

// //* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
// //* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
// //* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.
const concatinatedNames = team.map((a)=>{
  return {
    fullName:`${a.name.toUpperCase()} ${a.surname.toUpperCase()}`,
    age: `${a.age+5}`
  }
})
console.log(concatinatedNames);




// const concatinatedNames = team.map((p) => {
//   return {
//     fulName: `${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
//     age: p.age + 5,
//   };
// });

// console.log(concatinatedNames);

// const concatinatedNames2 = team.map((p) => ({
//   fulName: `${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
//   age: p.age + 5,
// }));
// console.log(concatinatedNames2);
