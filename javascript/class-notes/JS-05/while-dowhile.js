//* -------------------------------------------------------------------------- 
//*                               WHILE DONGULERI                             
//* --------------------------------------------------------------------------

// let i =0;
// while(i < 10){
//     console.log(i)
//     i++
// }
//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.
// let not = prompt("Lütfen notunuzu girniz:")

//?karar yapıları ile bir işlem tekrar tekrar yaptırılamaz.
//? Eger tekrarlanacak olan bir şey var ise bunun için döngüsel elmaznlar kullanılır
// if(not<0 || not >100){
//     alert("Not 0 san küçük veya 100 den büyük olamaz.")
// }
let not1 = prompt("Lütfen notunuzu girniz:")
while(not1<0 || not1 >100){
    alert("Not 0 dan küçük veya 100 den büyük olamaz.")
    not1 = prompt("Yeniden notunuzu giriniz:")
}

console.log("Girdiginiz Not:", not1);

//? FOR COZUMU
// let not2 = prompt("Lütfen notunuzu girniz:")
// for(; not2<0 || not2 >100;){
//     alert("Not 0 dan küçük veya 100 den büyük olamaz.")
//     not1 = prompt("Yeniden notunuzu giriniz:")
// }

// console.log("Girdiginiz Not:", not1);

//? do while en az bir kere döndürür
let i =10;
do{
    console.log(i);
    i++
}
while(i < 10)
let num1 =Math.round(Math.random()*100)
console.log(num1);