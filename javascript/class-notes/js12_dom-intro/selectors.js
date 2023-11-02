console.log("***** SELECTORS *****");
document.title = "FS 15 DOM INTRO 🎯";
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const header = document.getElementById("header");
console.log(header);

//?Dom bir obje modelidir
//?Atribute isimleri camelCase olmalıdır
header.style = "background-color:green; font-family:Tahoma; color:white";

//? key=value
const h2=document.getElementById("add-new-item")
console.log(h2);
//*text elamanının içeriğini okums yöntemleri
console.log(h2.textContent);
console.log(h2.innerText);
console.log(h2.innerHTML);
//*Text elemanlarının içeriğini değiştirme
h2.textContent="ADD"
h2.innerText="ADD ITEM"
h2.innerHTML="ADD NEW ITEM"
h2.innerHTML="<p style='color:red'>Deneme</p>"

//*input elemanlarının değeri value property'si ile değiştirilir
document.getElementById("btn").value="Submit"
const input=document.getElementById("input")

input.value="Javascript"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
//!HTMLCollection DOM un sundugu bir veri  yapısıdır
//!Array-like

//? for döngüleri ile itere edilebilir

//? HTML Collection yapısının Array cevrilebilir

//?Array.from() metodu ile yine array e cevrilebilir

//?ORNEK

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//! Qouery Selector ile id, tag class seçilebilir.
//!bu secici akısta gördüğü ilk elementi alır
//? id almak için (#) kullanılır

//?class almak için (.)

//?tag almak için

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

//*queryselectorAll bir nodelist döndürür .nodelist dahili olarak forEach metodunu barındırır.Ama istenirse spread veya Array.from ile

console.log("********************");
