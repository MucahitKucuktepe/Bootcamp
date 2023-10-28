// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* 1.yöntem (Array-literal) tercih edilen yöntem

let isimler=["ahmet","mehmet", 4, true, 6.6,"canan", "yeni"]
console.log(isimler);
console.log("UZUNLUK:",isimler.length);
console.log(typeof isimler);

const sonEleman= isimler[isimler.length -1]
console.log(sonEleman);

isimler[4]= "altı"
console.log(isimler);
isimler[2]++
console.log(isimler);

console.log(isimler);
let number= 6
console.log(number);
number =8
console.log(number);
const diller=["java","C++",["ASM","Binary"],"javascript", new Date().getFullYear()]
console.log(diller);

console.log(diller[2][0]);
 diller[2][1]= "C"
 console.log(diller);

 const languages = new Array("C++","java","PHP")
 console.log(languages);
 languages[0]="Python"
 console.log(languages);
 const numbers =new Array(3,2,1,0)
 console.log(numbers);

//! 10 elemanlık bos bir array olusturdu
//! eger constructura parametre olarak tek bir sayı girilirse,
//! constructor bunu o sayıda bir bellek alanı acılacakmıs gibi dusunur
 const numbers1=new Array(10)
 console.log(numbers1);

 //! 3.yöntem Array.of()

 const numbers2=Array.of(5,1)
 console.log(numbers2);
 console.log(isimler.reverse());

 const meyveler = ["Çilek","Muz","Elma"]
 console.log(meyveler);
 meyveler[meyveler.length]="Kiraz"
 console.log(meyveler);
 meyveler.push("kavun")
 console.log(meyveler);
 const uzunluk = meyveler.push("kavun") //! sona eleman ekler 
 console.log(meyveler,uzunluk);
const removed=meyveler.pop()  //! eleman siler
console.log(removed);

const removedShift = meyveler.shift()
console.log(removedShift); //! bastaki elamanı siler ve bize silinen elemanı döndürür
console.log(meyveler);
const updateLength = meyveler.unshift("kivi")
console.log(updateLength);
console.log(meyveler);
//* splice

meyveler.splice(1,0, "yaban mersini")
console.log(meyveler);

meyveler.splice(3,1,"Mandalina","greyfurt")
console.log(meyveler);
meyveler.splice(3,1)
console.log(meyveler);

//?SORT METODU
meyveler.sort()
console.log(meyveler);

//!sıralarken ascıı koda göre sıralar

const numbersUnsorted=[2,3,22,33,55,1,11,111,13]
numbersUnsorted.sort()
console.log(numbersUnsorted);

numbersUnsorted.sort((a,b)=>a-b)
console.log(numbersUnsorted);

const veriler =[1,3,4,5]
veriler.fill(2,0,1,)
console.log(veriler);
veriler.fill(1,-1)
console.log(veriler);
console.log(veriler.includes(3));