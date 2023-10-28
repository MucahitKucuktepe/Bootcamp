//?------------------PRACTICE-1----------
// const number = Number(prompt("sayi giriniz: "))

// if (number > 0){
//     console.log("This number positive!");
// }else if(number < 0){
//     console.log("This number negative");
// }else{
//     console.log("This number zero");
// }

//?------------------PRACTICE-2-----------

// const number1 = Number(prompt("Bir sayi giriniz:"))
// const number2 = Number(prompt("Bir sayi giriniz:"))
// const number3 = Number(prompt("Bir sayi giriniz:"))
// if ((number1 > number2) && (number1>number3)){
//     console.log("The biggest number is:", number1);
// }else if ((number2>number3)&& (number2>number1)){
//     console.log("The biggest number is: ", number2);
// }else{
//     console.log("The biggest number is:", number3);
// }

//?---------------------PRACTICE-3----------
// const number1 = Number(prompt("Bir sayi giriniz:"));
// const number2 = Number(prompt("Bir sayi giriniz:"));
// const islem = prompt(
//   "yapmak istedginiz islemi giriniz:(toplama,carpma,cikarma,bolme) "
// );

// if (islem == "toplama") {
//   console.log(number1 + number2);
// } else if (islem == "carpma") {
//   console.log(number1 * number2);
// }else if (islem == "cikarma"){
//     console.log(number1 - number2);
// }else if (islem == "bolme" ){
//     console.log(number1 / number2);
// } else{
//     console.log("İslemi duzgun girniz!");
// }
//?----------------- TEAM WORK ACTIVITY------------
// const month = prompt("Enter a month(1-12)");
// const day = prompt("Enter a day(1-31)");

// if (month < 1 || month > 12 || day < 1 || day > 31) {
//   console.log("plase enter valid values");
// } else if (month >= 3 && month <= 5) {
//   console.log("season: spring");
// } else if ((month >= 6 && month <= 9) || (month === 9 && day <= 20)) {
//   console.log("season: summer");
// } else if (month >= 9 && month <= 11) {
//   console.log("season: fall");
// } else {
//   console.log("season winter");
// }

// const year = Number(prompt("Please input a year:"))

// if (year % 4 == 0 && year % 100 != 0){
//     console.log("This year is leap");
// }else if (year%400 ==0){
//     console.log(`${year} This year is leap`);
// }
//?---------------------PRACTICE-4----------
//* Clarusway'deki haftalık ders programınızı, console dan girilen gün degerine göre çıktı veren kodu Switch-case yapısı ile olusturunuz!

// let gun = +prompt("Gun: 1-7");
// switch (gun) {
//   case 1:
//     gun= "Inclass";
//     break;
//   case 2:
//     gun= "Inclass";
//     break;
//   case 3:
//     gun= "Inclass";
//     break;
//   case 4:
//     gun= "Inclass";
//     break;
//   case 5:
//     gun= "Teamwork";
//     break;
//   case 6:
//     gun= "Inclass + workshop";
//     break;
//   case 7:
//     gun= "Self-study";
//     break;
//   default:
//     alert("Gun 1-7 arasinda olmalıdır!");
//     break;
// }
// console.log(gun);
//* TERNARY İLE TEK SATIRLIK KARAR İŞLEMLERİ YAPILIR.

// const hiz = 90;

// const mesaj = hiz >= 120? "Hızlı":"Yavas";
// console.log(mesaj);

// const grade = +prompt("Please enter your grade note:")

// const mesaj2 = grade >=50 ? "Gecti":"Kaldi";
// console.log(mesaj2);


// const mesaj3 = grade >=50 ? "Gecti":"Kaldi";
// console.log(mesaj2);

// if (grade < 40){
//     console.log("Kaldı");

// }else if (40<= grade &&  grade <=50){
//     console.log("Şartlı Geçti");
// }else if (50< grade){
//     console.log("Geçti");
// }

// const maas = +prompt ("Lütfen maasınızı giriniz:$")

// const mesaj = maas >=11000 ? "maasa 10% zam": (maas<=11000? "maasa 50% zam":"maasa zam işse son" )
// console.log(mesaj);
console.log(true || false)