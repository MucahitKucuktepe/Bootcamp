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
const h2 = document.getElementById("add-new-item");
console.log(h2);
//*text elamanının içeriğini okums yöntemleri
console.log(h2.textContent);
console.log(h2.innerText);
console.log(h2.innerHTML);
//*Text elemanlarının içeriğini değiştirme
h2.textContent = "ADD";
h2.innerText = "ADD ITEM";
h2.innerHTML = "ADD NEW ITEM";
h2.innerHTML = "<p style='color:red'>Deneme</p>";

//*input elemanlarının değeri value property'si ile değiştirilir
document.getElementById("btn").value = "Submit";
const input = document.getElementById("input");

input.value = "Javascript";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
//!HTMLCollection DOM un sundugu bir veri  yapısıdır
//!Array-like grubuna girer
const list = document.getElementsByTagName("li");
console.log(list);
console.log(list.length);
//!Ancak array lerin tüm özelliklerini çalıştırmaz
//? for döngüleri ile itere edilebilir
for (let li of list) {
  console.log(li.textContent);
}

//? HTML Collection yapısından Array cevrilebilir
const listArray = [...list]; //? spread ile array e cevirildi
console.log(listArray);
listArray.forEach((li) => (li.style.color = "green"));

//?Array.from() metodu ile yine array e cevrilebilir
Array.from(list).map((li)=>li.style.backgroundColor="yellow")

//?ORNEK

const sections =document.getElementsByTagName("section")
console.log(sections);
console.log(sections[0]);


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const myList=document.getElementsByClassName("list")
console.log(myList);
console.log(myList[0].textContent);

const section=document.getElementsByClassName("item-list")//?tek elemanlı bir dizi döndürür
console.log(section.length);
console.log(section[0]);


//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//! Qouery Selector ile id, tag class seçilebilir.
//!bu secici akısta gördüğü ilk elementi alır
//? id almak için (#) kullanılır
console.log(document.querySelector("#header"));
//?class almak için (.)
console.log(document.querySelector(".item-list"));
//?tag almak için ()
console.log(document.querySelector("h3"));

console.log(document.querySelector("section.add-item #btn"));
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

//*queryselectorAll bir nodelist döndürür .nodelist dahili olarak forEach metodunu barındırır.Ama istenirse spread veya Array.from ile

console.log("********************");
