//*selectors
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
//*variables
let gelirler = 0;
let harcamaListesi = [];

//*Hesap Tablosu

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//*Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//*Harcama Tablosu

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//*Ekle Formu
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;
  ekleFormu.reset();
});

//*Sayfa yüklendiği zaman localstorage deki verileri al
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
  tarihInput.valueAsDate = new Date();
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); // reload ı engeller

  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  console.log(yeniHarcama);
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();

  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamlar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama)
});

//*Harcamayı Dom a yaz

const harcamayiDomaYaz=({id,miktar,tarih,alan})=>{
    harcamaBody.innerHTML +=`
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger" type="button" ></i></td>
    `
}
 
