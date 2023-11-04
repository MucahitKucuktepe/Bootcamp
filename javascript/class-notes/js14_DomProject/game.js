//? PC 'ye 1-20 arasında bir sayı tutturduk

let rasgeleSayi = Math.ceil(Math.random() * 20);
console.log(rasgeleSayi);

let mesaj = document.querySelector(".msg");
let skor = 10;
//* skor u index html den seçebilirdik aöa çok kullanacağımız için bu daha tercih edilen yol oldu.
//!local storage da top-score adıyla bir değişken varsa onu geti yoksa 0 getir
let enYuksekSkor = localStorage.getItem("top-score") || 0;

//!------browserda, Dom DA TOP SCORE DEĞERİNİ LOCAL STORAGE DAN OKUYARAK GÜNCELLE ÖZELLİKLE 2. VE 3. OYUNCULAR İÇİN GEREKLİ
document.querySelector(".top-score").textContent = enYuksekSkor;
//?Her Check butonuna basıldıgında yapılacaklar
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //!Tahmin girmeden butona basıldıysa
  if (!tahmin || isNaN(tahmin)) {
    mesaj.textContent = "Lütfen bir sayı giriniz";

    //?Tahmin dogruysa
  } else if (tahmin == rasgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz!🎯";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rasgeleSayi;
    //!Top Score Konrolu
    if (skor > enYuksekSkor) {
      localStorage.setItem(".top-score", skor);
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }

    //?Tahmin Yanlışsa
  } else {
    //? Skor 1'den büyük oldugu sürece tahmin hakkım var
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      //?Arttır azalt kısımları yapıldı
      tahmin < rasgeleSayi
        ? (mesaj.textContent = "Artır⬆⏫")
        : (mesaj.textContent = "Azalt⏬");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";

      //!Oyunu kaybettiniz
    }
  }
});

//?Again butonuna basınca ayarlar başlangıç değerlerine kurulsun. Arka plan #2d3436
document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  rasgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rasgeleSayi);

  skor = 10;
  document.querySelector(".score").textContent = skor;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  mesaj.textContent = "Oyun Yeni Oyuncu için başlıyor";
};

//! ENTER
//* Klavyeden Enter a basıldıgında check butonunu tetikle
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    //*Enter tusuna basıldıgında check butonunu tetikle
    document.querySelector(".check").click();
  }
});

document.querySelector(".check").addEventListener("click", () => {
  tahmin = document.querySelector(".guess").value;
  const tahminSayi = parseInt(tahmin);
  if (tahminSayi>=1 && tahminSayi <=20 && !isNaN(tahminSayi)) {
    //*Doğru sayı girilmişse onu devam ettir
  
  } else {
    mesaj.textContent="Geçersiz sayı girdiniz (1-20 arasında bir sayı giriniz)"
    skor ++
  }
});
