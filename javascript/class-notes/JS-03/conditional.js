const number = Number(prompt("Give me a number:"))

if (number < 0){
    console.log("sayi negatiftir");
} else if  ( number > 0){
    console.log("Sayi pozitiftir");
} else {
    console.log("sayi 0 a eşittir");
}

const grade = 67
let sonuc = ""
if (grade < 0 || grade > 100){
    console.log("Hatalı not girdiniz");
    sonuc = "hatalı not girisi"
} else if(grade<40){
    sonuc = "ff"
} else if (grade < 55){
    sonuc="dd"
} else if (grade < 70 ){
    sonuc = "cc"
} else if (grade< 85){
    sonuc = "bb"
}else{
    sonuc= "aa"
}

if (sonuc){
console.log("SONUC:",sonuc);
}