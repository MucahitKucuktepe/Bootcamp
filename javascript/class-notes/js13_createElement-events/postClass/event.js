//* ==============================================
//*                  EVENTS
//* ===============================================
//?selector varıable
console.log("****** EVENTS *******");
const myPar = document.createElement("p");
//?text düğümü oluşturuldu
const text = document.createTextNode("P Elementi");
//?oluşturulan düğüm yeni elemnete baglandı
myPar.appendChild(text);
console.log(myPar);

document.querySelector(".add-item").appendChild(myPar);
const addItemSection = document.querySelector(".add-item");
addItemSection.before(myPar);
//? react içeriğine sahip olan li elementinin sonuna p elemnti eklendi
const reactLi = document.querySelector("ul li:nth-child(4)");
reactLi.after(myPar);

//* ==============================================
//*     ID, CLASS GIBI OZELLIKLERI ATAMA
//* ===============================================

//? 1.yontem
myPar.id = "paragraf";
myPar.className = "red center";

//? 2.yontem (setAttribute)
myPar.setAttribute("id", "deneme");
myPar.setAttribute("class", "bg-warning border border-danger border-3");
myPar.setAttribute("type", "button");

//? 3.yontem (classList)

myPar.classList.add("text-center");
myPar.classList.contains("border-danger");

if (myPar.classList.contains("border-danger")) {
  myPar.classList.remove("border-danger");
  myPar.classList.add("border-primary");
}

myPar.classList.toggle("text-danger");

//******** */ YENI BIR ELEMENT OLUSTURMA (InnerHTML)
const ul = document.querySelector("ul");
ul.innerHTML += `
<li>C++</li>
<li>Java</li>
<li>Asembly</li>
`;

const section2=document.createElement("button")
const text2=document.createTextNode("delete")
section2.appendChild(text2)
document.querySelector(".add-item").appendChild(section2)
section2.setAttribute("class", "delete")

const section3=document.createElement("section")
document.querySelector("main").appendChild(section3)
// section2.onmouseover=function()=>{
//   remove(document.querySelector("ul li"))
// }

section3.innerHTML=`
<div class="card" style="width: 18rem;">
  <img src="https://cdn.pixabay.com/photo/2023/09/14/15/48/woman-8253239_1280.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`
const header =document.querySelector("header")

header.onmouseover=function(){
  header.style.backgroundColor="red"
}
header.onmouseout=function(){
  header.style.backgroundColor="transparent"
}


//?3.yontemle event tanımlandı
//* mouse header ın üzerine geldiğinde ilgili function cagırılır

//*mouse header ın üzerinden ayrıldıgında ilgili function cagrılır

//? addeventlistener metodu ile event tanımlandı
//* add nutonuna tıklanıldıgında functon cagrılır

//?input elementi üzerinde iken kalvyeden bir tusa basılıp-bırakıldıdıgında (keyup) tetiklenir

//? onload Html ve Css kodlarının render edilmesinin hemen akabinde calısır

//? window yüklendiğinde input a fokuslan
