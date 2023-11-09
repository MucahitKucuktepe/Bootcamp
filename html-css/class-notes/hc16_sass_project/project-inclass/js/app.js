//? JS

const hamburgetBtn=document.querySelector(".fa-bars")

hamburgetBtn.addEventListener("click",()=>{
    const headerLinks=document.querySelector(".header__links")
    headerLinks.classList.toggle("show")

})