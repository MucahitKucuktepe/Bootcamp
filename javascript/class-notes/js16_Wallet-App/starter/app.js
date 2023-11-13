//*SELECTORS

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//*VARIABLES

let gelirler = 0;

//*HESAP TABLOSU

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan")

//*EKLE FORMU

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText=gelirler
  ekleFormu.reset();
});
//*sayfa yüklendiğinde depodaki gelirin ekrana yazılmasını sağladım
window.addEventListener("load",()=>{
    gelirler=Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.innerText=gelirler
})
