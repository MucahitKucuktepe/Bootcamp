console.log("**** CREATE NODE ****");

//* ------- YENI BIR ELEMENT OLUSTURMA ------
//?- yeni bir element oluştur
const myPar = document.createElement("p");
//?- Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("P elementi");
//?-Olusturulan text dugumunu yeni elemente bagla (append)
myPar.appendChild(text);
//?- Yeni olusan elementi DOm tree'ye ekle

const addItemSection = document.querySelector(".add-item");
addItemSection.appendChild(myPar);
console.log(myPar);

//!Elemen.before() ve Element.after() appenChild gibi aslında bir elementi  Dom tree ye ekleyebiliriz
addItemSection.before(myPar); //? add-item section ın hemen üzerine mypar ı baglar
//? React icerigine sahip olan li elementinin devamına yeni elementi ekledik

const reactLi = document.querySelector("ul li:nth-child(4)");
console.log(reactLi.textContent);
reactLi.after(myPar);

//**** */ ID, CLASS GIBI OZELLIKLERI ATAMA****/
//? 1) Yontem
myPar.id = "paragraf";
myPar.className = "red center";
myPar.name = "par";
myPar.type = "button";

//? 2) yontem
myPar.setAttribute("id", "deneme");
myPar.setAttribute("type", "button");
myPar.setAttribute(
  "class",
  "bg-warning border-danger border border-red border-3 text-danger"
);
// myPar.setAttribute("class","bg-success")
//? 3) yontem
myPar.classList.add("text-center");
myPar.classList.contains("text-center");
console.log(myPar.classList.contains("text-center"));

if (myPar.classList.contains("border-danger")) {
  myPar.classList.remove("border-danger");
  myPar.classList.add("border-primary");
}

//?toogle metodu belirtilen class eger yok ise class ı ekler eger belirtilen class var ise bu calss ı kaldırır
myPar.classList.toggle("text-danger");

//*** */ YENI BIR ELEMENT OLUSTURMA (InnerHTML)

const ul = document.querySelector("ul");

ul.innerHTML += `
          <li id="deneme" class="list">C++</li>
          <li class="list fw-bold">JAVA</li>
          <li class="list">Ruby</li>
          <li class="list">Asembly</li>
`;
const section3 = document.createElement("section");
const main = document.querySelector("main");
document.querySelector("main").appendChild(section3);

section3.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
