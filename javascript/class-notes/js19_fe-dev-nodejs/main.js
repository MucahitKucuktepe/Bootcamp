import "./style.scss";

const app = document.querySelector("#app");

app.innerHTML = `
<section id="users"></section>
`;
import { getUsers } from "./src/getUsers";




window.addEventListener("load",()=>{
  getUsers()
})