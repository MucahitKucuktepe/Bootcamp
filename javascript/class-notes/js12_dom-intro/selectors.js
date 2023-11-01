console.log("***** SELECTORS *****");
document.title = "FS 15 DOM INTRO 🎯";
//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const header= document.getElementById("header")
console.log(header);

//?Dom bir obje modelidir
//? key=value
header.style.backgroundColor="green"
header.style.color="white"
const h2=document.getElementById("add-new-item")
console.log(h2);
//*text elamanının içeriğini okums yöntemleri
console.log(h2.textContent);
console.log(h2.innerText);
console.log(h2.innerHTML);

h2.textContent="ADD"
h2.innerText="ADD ITEM"
h2.innerHTML="ADD NEW ITEM"
h2.innerText="<p>Deneme</p>"
h2.innerHTML="<p style='color:red'>Deneme</p>"

//*input elemanlarının değeri value propertileri ile değiştirilir
document.getElementById("btn").value="Submit"
const input=document.getElementById("input")
console.log(input);
input.value="dfsdf"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
//!HTMLCollection DOM un sundugu bir veri  yapısıdır 
//!Array-like
const lists =document.getElementsByTagName("li")
console.log(lists);//?HTMLCollection(5) 
console.log("SIZE:", lists.length);
//? for döngüleri ile itere edilebilir
for(let li of lists){

    console.log(li.textContent);
}

//? HTML Collection yapısının Array cevrilebilir
const listArray =[...lists]//? array e cevrildi
console.log(listArray);
listArray.forEach((li)=>(li.style.color="green"))
//?Array.from() metodu ile yine array e cevrilebilir
Array.from(lists).map((li)=>li.style.backgroundColor="yellow")

//?ORNEK
const sections= document.getElementsByTagName("section")
console.log(sections);
sections[1].style.backgroundColor="blue"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const myList=document.getElementsByClassName("list")
console.log(myList);
console.log(myList[0].innerText);
console.log(document.getElementsByClassName("item-list"));

const section=document.getElementsByClassName("item-list")
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

//?tag almak için
console.log(document.querySelector("h3"));

console.log(document.querySelector("section.add-item #btn"));
console.log(document.querySelector("ul li:nth-child(4)"));
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

//*queryselectorAll bir nodelist döndürür .nodelist dahili olarak forEach metodunu barındırır.Ama istenirse spread veya Array.from ile 
const itemList=document.querySelectorAll("section.item-list li")
console.log(itemList);
itemList.forEach((li)=>console.log(li))

console.log("********************");
for(let li of itemList.values()){
    console.log(li);
}
for(let li of itemList){
    console.log(li);
}