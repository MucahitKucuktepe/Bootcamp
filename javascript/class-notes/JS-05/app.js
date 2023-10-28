//*ASAL SAYI BULMA SORUSU
// let b=0 ;
//  let a=parseInt(prompt("Asal olup olmadığını öğrenmek istediğiniz sayıyı giriniz:")) ;
//  for (i=1;i<=a;i++) {
// if (a%i==0) {
// b++ } } ;
//  if( b==2) {
// console.log("Girdiğiniz sayı asaldır") }
// else {
// console.log("Girdiğiniz sayı asal değildir.") }



let i=0;
for(i=0; i<=10; i++){
    if(i<=5){
        continue
    }
    if(i==8){
        break
    }
    console.log(i);
}
