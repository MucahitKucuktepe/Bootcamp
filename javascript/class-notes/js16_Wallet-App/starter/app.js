//*SELECTORS

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//*VARIABLES

let gelirler = 0;
let harcamaListesi = [];

//*HESAP TABLOSU

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//*HARCAMA FORMU
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlanıInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//*HARCAMA TABLOSU

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//*EKLE FORMU

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;
  ekleFormu.reset();
});
//*sayfa yüklendiğinde depodaki gelirin ekrana yazılmasını sağladım
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
});

//*
harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault() //!reload ı engeller
    const yeniHarcama={
        
    }


})
