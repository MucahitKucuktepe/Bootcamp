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
h2.innerHTML="<p>Deneme</p>"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
