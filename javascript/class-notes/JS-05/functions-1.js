// //?Declaration
// function topla(){
//     let a= 5
//     let b=10
//     let sonuc = a+b
//     console.log(sonuc);
// }
// topla()
// function carp (x,y){
//     console.log(x*y);
// }

// carp(3,10)
// let s1 =+ prompt("S1:")
// let s2 =+ prompt("S2:")
// carp(s1,s2)

function yazdir(lang="Hello!",name="Jason"){
    console.log(`${lang} ${name}`);
}
yazdir("mehmet")

function toplama1 (n1,n2,n3){
    return n1+n2+n3
}

console.log(`SONUC=${toplama1(3,5,7)}`);

const sayi = Number(prompt("Bir sayi giriniz:"))

function tekVeyaCift(sayi){
    return sayi % 2 ===0 ? "CIFT": "TEK"

}
console.log(`${sayi} ${tekVeyaCift(sayi)} dır`);
