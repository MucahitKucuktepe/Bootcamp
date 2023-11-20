//*************************************/
//* ES-MODULES (INDEX:JS)
//*************************************/
console.log(" *** ES-Modules ** ");
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonkisyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.
import{isim, PI as pi} from "./hesapmakinesi.js"
console.log(isim);
console.log(pi*10*10);

import {topla,cikar,carp,bol} from "./hesapmakinesi.js" //!import ve exportlar hoisted dır


console.log("TOPLAM:", topla(3,4));
console.log("BOL", bol(6,4));
console.log("CIKAR:", cikar(5,4));
//! 1- import'lar hoisted olur bu yüzden herhangi bir yerde eklenebilir ancak best practice en üste eklenmeleridir.
//? export default ile paylaşılan bir değişken v.b süslü parantez kullanılmadan import edilebilir.
//?export default da as kullanmadan  herhangi bir isim kullanılabilir
import mesaj from "./hesapmakinesi.js"
mesaj()

//! 1- import'lar hoisted olur bu yüzden herhangi bir yerde eklenebilir ancak best practice en üste eklenmeleridir.

//! 2- top-level this kullanimi window objesini göstermez.
console.log(this) //? undefined

//! 3- default olarak 'use strict' aciktir. Dolayısıyla Daha katı bir şekilde derleme yapilir.
// variable = 2
// console.log(variable)
