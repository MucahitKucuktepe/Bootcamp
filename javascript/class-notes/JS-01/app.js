console.log("Harici APP.js calisti");

document.write("DOM'a yazi bas.")
karar=confirm("Devam etmek istermisniz: E/H")
console.log(karar);
if (karar==true) {
    console.log("EVET e basildi");
    
}   else{
        console.log("HAYIR'a basildi");
    }
console.warn("UYARI")
console.error("HATA")

// Degisken Tanımlama

const num1=5
let num2=6

console.log(num1)
console.log(typeof num1);

console.log(num2);
console.log(typeof num2);

//*CONST ATAMA DAHA SONRA DEĞİŞTİRİLEMEZ
// num1 = num1 + 1
// console.log(num1);

num2 = num2+1
console.log(num2);