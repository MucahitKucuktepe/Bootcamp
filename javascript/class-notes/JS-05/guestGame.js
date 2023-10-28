//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

// console.log("*** WELCOME TO GUESS GAME ****")
// let trial = 0;
// let rand = Math.trunc(Math.random()*100)
// console.log(rand);
// while (rand >=0 && rand <=100){
// let guess = Math.trunc(+prompt("Bir sayi tahmin ediniz:"))
// trial +=1
// console.log(trial);
// if(guess==rand){
//  console.log("Congrast,you win 🥳");
//  break
// }else if (guess < rand && trial <5){
//     console.log("INCREASE ⬆️");
//     continue
// }else if (guess > rand && trial < 5){
//     console.log("DECREASE ⬇️");
//     continue
// }else{console.log("Sorry, you lost 🥹");}
// break
// }

function area(r){
    const area = Math.PI * (r**2);
    console.log(area);
}

area(2)

// let i = 0
// while(i<10){
//     console.log("Merhaba Dünya" ,i);
//     i++
// }
// let sayac = 1;
// do{
//     console.log("Merhaba Dünya", sayac);
//     sayac ++;

// }while(sayac<10)

// let not;

// do{
//     not= +prompt("0-100 arasında bir not giriniz:")
//     // if(not >=0 &&  not <=100){
//     //     console.log("Notunuz geçerli");
//     // }else{
//     //     console.log("Lütfen 0-100 arasında bir not girin.");
//     // }

// }while(  not <0 || not>100);

// let notunuz;

// do {
//   notunuz = parseInt(prompt("Lütfen 0-100 arasında bir not girin:"));
  
//   if (notunuz >= 0 && notunuz <= 100) {
//     console.log("Girilen not geçerli.");
//   } else {
//     console.log("Lütfen 0-100 arasında bir not girin.");
//   }
// } while (notunuz < 0 || notunuz > 100);

//? let sayac1 = 0
// let not1;
// let ort ;
// let not2=0
// do{
    
//     not1= prompt("bir not giriniz:")
//     if (not1 ==="Q"|| not1 ==="q"){
//         break
//     }else {
//     sayac1 ++
//     not1 = Number(not1)
//     not2 += not1
//     console.log(not2);
//     console.log(sayac1);
//     }
// }while(true)

//? console.log(`${sayac1} ${not2/sayac1}`);

function calcAge(age){
    return age*365;
}
console.log( calcAge(65));

let power;

function circuitPower(voltage, current) {
	power = voltage * current
    console.log(power);
}
circuitPower(30,10)

function circuitPower(voltage, current) {
	return voltage*current
   
	
}
console.log(circuitPower(30,10));



