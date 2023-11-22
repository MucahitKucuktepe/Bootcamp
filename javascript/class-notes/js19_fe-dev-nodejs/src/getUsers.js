//?Named Export
import { show } from "./renderUserAndError";
export const getUsers=()=>{
  
    fetch("https://api.github.com/users")
    .then((res) => {
      // console.log(res)
      if (!res.ok) {
        //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
        throw new Error(`Hata: ${res.status}`); //? bir hata firlatiyoruz
      }
      return res.json();
    })
    .then((data) => {
     
      show(data);
    })
    .catch((err) => document.write(err));
    }
    