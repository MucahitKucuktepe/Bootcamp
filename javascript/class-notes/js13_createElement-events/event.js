//* ==============================================
//*                  EVENTS
//* ===============================================
//?selector varıable
console.log("****** EVENTS *******");
const header = document.querySelector("header");
const addButton = document.getElementById("btn");
const input = document.querySelector("#input");
const ul = document.querySelector("ul");
console.log(ul);

//?3.yontemle event tanımlandı
//* mouse header ın üzerine geldiğinde ilgili function cagırılır
header.onmouseover = function () {
  header.style.backgroundColor = "red";
  header.style.color = "white";
};
//*mouse header ın üzerinden ayrıldıgında ilgili function cagrılır
header.onmouseout = function () {
  header.style.backgroundColor = "transparent";
  header.style.color = "black";
};

//? addeventlistener metodu ile event tanımlandı
//* add nutonuna tıklanıldıgında functon cagrılır
addButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("Lütfen bir bilgi giriniz");
  } else {
    const li = document.createElement("li");
    const text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);
    input.value = " ";
    input.focus();
  }
});
//?input elementi üzerinde iken kalvyeden bir tusa basılıp-bırakıldıdıgında (keyup) tetiklenir
input.addEventListener("keyup", (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    // console.log(event.keyCode);
    // console.log(event.code);
    //? basılan tus enter ise
    if(event.code==="Enter"){
        //? add butonunun click fonksiyonunu cagırıyoruz
        addButton.click()
    }
  });

const yazdir = () => {
  document.write("Hello from Turkey");
};
//? onload Html ve Css kodlarının render edilmesinin hemen akabinde calısır
window.onload = yazdir();

//? window yüklendiğinde input a fokuslan
window.addEventListener("load", () => {
  // document.getElementById("input").focus()
  // document.querySelector("#input").focus()
  input.focus();
});
