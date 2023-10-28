const not = 50;
const result = not >= 50 ? "GECTI" : "KALDI";
console.log(result);

const hizmetYili = 5;
let maas = 15000;

// hizmetYili >= 5 ? (maas *= 1.1) : "";
// console.log(maas);

//**************************SHORT-CIRCUIT*************/

//? short circuit yonteminde aradaki operator && ise kosul dogru
//? oldugunda var olan ifadeyi calıstırır aksi takdirde bişey calıştırmaz.
//!ampersamt
// hizmetYili >= 5 && (maas *= 1.1);
//? short circuit yonteminde aradaki operator || ise kosul yanlıs
//? oldugunda var olan ifadeyi calıstırır aksi takdirde bişey calıştırmaz.
//!pipe
hizmetYili >= 5 || (maas *= 1.1);
console.log(maas);