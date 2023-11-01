console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)
//*yukarı yönde traverse
const html=document.querySelector("ul li:nth-child(1)")
console.log(html.parentNode.parentNode.parentNode);
console.log(html.parentElement.parentElement.parentElement);

//? closest() metodu root yönündeki uygun olan parent'i seçer
console.log(html.closest("section"));//? en yakın section parent i bulur

console.log(html.closest("main").querySelector("#add-new-item"))//? en yakın main i bul içerisindeki add-new-itwm  adli elemnti bul 

//* Aşagı yönlü Traverse
//? child, firsElementChild, lastElementChild
console.log(html);
console.log(html.firstElementChild);
console.log(html.firstChild);

const itemList=document.querySelector(".item-list")
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
console.log(itemList.lastElementChild.firstElementChild);

//*-Yatay Yonde Tarvers
console.log(html.nextElementSibling.innerText);