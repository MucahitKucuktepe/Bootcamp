//?projenin style dosyasını ana js (main.js) kodumuza import ettik.
import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest.js";

const form = document.querySelector("header form");
//?selector u muzu tanımladık
form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault();
  getCoinData();
  e.target.reset();
});

const getCoinData =   () => {
  const input = document.querySelector("input").value;

  if (!input.trim()) {
    alert("Input can not be blank!");
  } else {
    apiRequest(input);
  }
};
