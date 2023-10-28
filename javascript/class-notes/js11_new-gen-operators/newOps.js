console.log("** NEW OPERATORS **");

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
const insan = {
  kimlikNo: "1234567890",
  adi: "Ahmet",
  soyadi: "Can",
  meslek: "Mimar",
  maas: 30000,
};
console.log(insan.maas); //? .notasyon
console.log(insan["meslek"]); //? square bracket

const mimarAdi = insan.adi;
console.log(mimarAdi);

//?Destructure

// let {adi, soyadi, meslek, kimlikNo, maas}= insan

// console.log(adi,soyadi, kimlikNo);
// kimlikNo="Abcg"
// console.log(kimlikNo);
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log("MAAS:", insanlar.kisi1.maas);
const { kisi1, kisi2 } = insanlar;
console.log(kisi1);

const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1;
const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = kisi2;

console.log(kisi2Soyadi);

//?2.yöntem
const {
  kisi1: { soyadi },
} = insanlar;
//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
console.log("*************************************************");
team.forEach((p) => {
  console.log("NAME:", p.name);
  console.log("JOB:", p.job);
  console.log("AGE:", p["age"]);
});
console.log("***********DESTRUCTUR***************************");
team.forEach((p) => {
  const { name, surname, age, job } = p;
  console.log("NAME:", name);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
});

function kisiOku() {
  return {
    no: "1234567890",
    isim: "Ahmet",
    soyisim: "Can",
    is: "Mimar",
    dilSayisi: 2,
  };
}
// console.log("KİŞİ:", kisiOku());
let { no, isim, soyisim, dilSayisi } = kisiOku();
dilSayisi++;
console.log(isim, dilSayisi);
console.log(kisiOku());
// const kisiOku = () => {};

//? parametre olarak objenin ve destr kullanımı

const data = {
  idi: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
};

const productPrint = (data) => {
  console.log(`${data.brand}-${data["product"]}:${data.stock}`);
};
productPrint(data);

const productPrintDestr = (data) => {
  const { brand, product, stock } = data;
  console.log(`${brand}-${product}:${stock}`);
};
productPrintDestr(data);

const productPrintDestrV2 = ({ brand, product, stock }) => {
  console.log(`${brand}-${product}:${stock}`);
};
productPrintDestrV2(data);

//* ======================================================
//*            DESTRUCTURING (ARRAY)
//* ======================================================

const people = ["Ali", "Veli", "Can", "Canan"];
console.log(people[0]);
//? array dest da sıra önemlidir
const [p1, p2, p4] = people;
console.log(p2);
console.log(p4);

//*======================================================
//*               REST (...)
//* ======================================================

//?REST ARRAY
const araclar = ["ATV", "Kamyonet", "Kamyon", "Tır", "Araba"];

const [a1, a2, ...geriKalanAraclar] = araclar;
console.log(geriKalanAraclar, a1, a2);
//?OBJECT REST (...)
const veri = {
  idi: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
};

const { idi, brand, ...productStock } = veri;
console.log(productStock);

//?2.kullanım fonksiyonların argümanlarını diziye çevirmek için kullanılır

const sum = (a, b) => a + b;
const sumAll = (...numbers) => {
//   console.log(numbers);
  return numbers.reduce((acc,val)=> acc+val,0)
};
console.log("SUM:", sum(2, 5, 6, 7, 8));
console.log("SUM-ALL:", sumAll(2, 5, 7, 8, 6));
//*==================================================
//*              SPREAD (...)
//* =================================================
const ucanAraclar = ["helikopter","drone","ucak","fuze"]
const karaAracları= ["araba","bisiklet","marti"]

const tasitlar=[ucanAraclar,karaAracları]//! nested array
console.log(tasitlar);
console.log(tasitlar[1][2]);

const tasitlarFlat=[...ucanAraclar,...karaAracları]
console.log(tasitlarFlat);
const slogan= "Reinvent Your Self"
const sloganArray=[...slogan]
console.log(sloganArray);

//?örnek
const sayilar =[2,4,5,13,56,23]
console.log(Math.max(...sayilar));

const ciftler=[2,4,6]
const tekler=[1,3,5]

const yeniSayilar= ciftler
console.log(yeniSayilar);
yeniSayilar.push(8)
console.log(yeniSayilar,ciftler);
//? kopyalama Spread ile yapılırsa 
const yeniArrSpread= [...ciftler]
console.log(yeniArrSpread);
//? spread ile yapılan kopyalamada tam olarak sıg kopyalama gerceklersmez dolayısıyla birinde ki degısıklık digerine yanzsımaz

//? ISTISNA: Eger dizide nesting varsa onlar için sig kopyalama gibi calısır
yeniArrSpread.push(10)
console.log(yeniArrSpread,ciftler);