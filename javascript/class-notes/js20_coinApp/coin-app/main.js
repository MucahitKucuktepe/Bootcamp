//? Projenin style dosyasını ana js (main.js) kodumuza import ettik
import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";

const form = document.querySelector("header form");
//?forma saubmit event e tanımladık
form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault(); //?tüm submit davranışlarını engelle
  getCoinData();
  e.target.reset(); //? formu silme davranısı calıstırır
});

const getCoinData = async () => {
  const input = document.querySelector("header form input").value;
  
  if (!input.trim()) {
    alert("Input can not be blank");
  } else {
    apiRequest(input);
  }

  
};
