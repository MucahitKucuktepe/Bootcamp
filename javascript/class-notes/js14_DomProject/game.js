//? PC 'ye 1-20 arasında bir sayı tutturduk

let rasgeleSayi = Math.ceil(Math.random() * 20);
console.log(rasgeleSayi);

let mesaj = document.querySelector(".msg");
let skor = 10;
//* skor u index html den seçebilirdik aöa çok kullanacağımız için bu daha tercih edilen yol oldu.

let enYuksekSkor = 0;

//?Her Check butonuna basıldıgında yapılacaklar
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //!Tahmin girmeden butona basıldıysa
  if (!tahmin || isNaN(tahmin)) {
    mesaj.textContent = "Lütfen bir sayı giriniz";

    //?Tahmin dogruysa
  } else if (tahmin == rasgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz!🎯";
    document.querySelector("body").style.backgroundColor="green"
    document.querySelector(".number").textContent=rasgeleSayi
    //!Top Score Konrolu

    //?Tahmin Yanlışsa
  }else{
    //? Skor 1'den büyük oldugu sürece tahmin hakkım var
    if(skor>1){
        skor--;
        document.querySelector(".score").textContent=skor
        
        //?Arttır azalt kısımları yapıldı
        tahmin < rasgeleSayi ? mesaj.textContent="Artır⬆⏫":mesaj.textContent="Azalt⏬"

    }else{
        mesaj.textContent="Oyunu Kaybettiniz"
        docume.querySelector(".score").textContent=0
        document.querySelector("body").style.backgroundColor="red"


        //!Oyunu kaybettiniz
    }

  }
});
