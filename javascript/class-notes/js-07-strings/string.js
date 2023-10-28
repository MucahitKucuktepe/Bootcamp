/* -------------------------------------------------------------------------- */
/*                      //! STRING PROPERTIES AND METHODS                     */
/* -------------------------------------------------------------------------- */

const paragraf = " \tMerhaba Cohort 15 sakinleri,\n \tGününüz güzel geçsin";
console.log(paragraf);

// \t 8 karakterlik boşluk bırakır
/* -------------------------------------------------------------------------- */
/*                        //? SRTING YAPISI VE INDEXLEME                         */
/* -------------------------------------------------------------------------- */

let course = "clarusway";
course[6] = "v";
console.log(course[6]);
//* stringler immutable dir

/* -------------------------------------------------------------------------- */
/*                       //! STRIN METOTLARI VE PROPERTIES                       */
//! -------------------------------------------------------------------------- */

for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}

const s1 = "Hello";
const s2 = "Clarusway";

console.log(s1 + " " + s2);

let yeniMetin = s1.concat(s2);
console.log(yeniMetin);

/* -------------------------------------------------------------------------- */
/*                              //?TEMPLATE LİTERAL                              */
/* -------------------------------------------------------------------------- */

const ad = "sema";
const soyad = "güven";

const fullName = `${ad} ${soyad} nasılsınız.
bugün js dersinin stringler konusundasınız`;
console.log(fullName);

// const ad1 = prompt ("Lütfen adınızı giriniz")

// console.log(`HOSGELDİN ${ad1.toLocaleUpperCase()}`);

let metin3 = "Clarusway IT Bootcamp";
console.log(metin3.split(" "));
let splittedMetin3 = metin3.split(" ", 2);
console.log(splittedMetin3);

for (let i = 0; i < splittedMetin3.length; i++) {
  if (splittedMetin3[i] === "Clarusway") {
    console.log(
      `${splittedMetin3[i]} kelimesi bu cümlenin ${i + 1}.elamanıdır`
    );
  }
}
let date = "14.10.2023";

let buGununTarihi = date.split(".");

console.log(`Bu gün ayın ${buGununTarihi[0]} ü`);

//! join ve reverse metodları string metotları degildir. Ama split ile kullanılanbilir.

let liste = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand";
let yeniliste = liste.split(";");
console.log(yeniliste);
console.log(yeniliste.join("-"));

//? reverse string metodu degildir

let selamlama = "NAZAN";
let tersten = selamlama.split("").reverse().join("");
console.log(typeof tersten);
if (selamlama == tersten) {
  console.log(`${selamlama} kelimesi polindrom bir kelimedir`);
}

let ataSoz = "Oku da adam ol";
console.log(ataSoz.split(" ").reverse().join("!"));

//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır.
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))

console.log(ataSoz.slice(0, -1));
let ozlusoz = "Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";
console.log(ozlusoz.substring(8, 13));
console.log(ozlusoz.substr(27, 5));


let variable = "kullanıcı adı"

let variable2 = variable.replaceAll(" ", "_").replaceAll("ı","i")

console.log(variable2);
console.log(`${ozlusoz.includes("tarak")}`);
let mail = "mehmet20132204@gmail.com"
masg = mail.includes("@") ? "Bu email geçerlidir.":"Bu email geçersizdir."
console.log(masg);

console.log(mail.indexOf(".edu"));
let metin4 = " Clarusway IT bootcamp.Clarusway develop you IT field"
console.log(metin4.search("IT"));
console.log(metin4.search(/it/gi));
let text="Merhaba bugün gerçekten çok sıcak bir Bugün"
console.log(text.match(/Bugün/gi));
let say =text.match(/Bugün/gi).length
console.log(say);