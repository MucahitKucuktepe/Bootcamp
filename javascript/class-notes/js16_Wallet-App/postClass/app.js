//*selectors
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
//*variables
let gelirler = 0;
let harcamaListesi = [];

//*Hesap Tablosu

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");
const kalanTh = document.getElementById("kalanTh");

//*Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//*Harcama Tablosu

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//*Ekle Formu
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;
  ekleFormu.reset();
  hesaplaVeGuncelle();
});

//*Sayfa yüklendiği zaman localstorage deki verileri al
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
  tarihInput.valueAsDate = new Date();
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];
  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama));
  hesaplaVeGuncelle();
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); // reload ı engeller

  const yeniHarcama = {
    id: new Date().getTime(),
    // tarih: tarihInput.value,
    tarih: new Date(tarihInput.value).toLocaleDateString(),
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();

  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);
  hesaplaVeGuncelle();
});

//*Harcamayı Dom a yaz

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  //! 1.yöntem tavisye edilmiyor
  // harcamaBody.innerHTML +=`
  // <td>${tarih}</td>
  // <td>${alan}</td>
  // <td>${miktar}</td>
  // <td><i id=${id} class="fa-solid fa-trash-can text-danger" type="button" ></i></td>
  // `

  const tr = document.createElement("tr");

  const appendTd = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
  };

  const creatLastTd = () => {
    const td = document.createElement("td");
    const iElement = document.createElement("i");
    iElement.id = id;
    iElement.className = "fa-solid fa-trash-can text-danger";
    iElement.type = "button";
    td.appendChild(iElement);
    return td;
  };

  tr.append(appendTd(tarih), appendTd(alan), appendTd(miktar), creatLastTd());
  harcamaBody.append(tr);
};

const hesaplaVeGuncelle = () => {
//   gelirinizTd.innerText = gelirler; //*geliri ekrana yaz
  gelirinizTd.innerText = new Intl.NumberFormat().format(gelirler); //*geliri ekrana yaz

  //*giderler toplamını bul
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );
//   giderinizTd.innerText = giderler;
giderinizTd.innerText = new Intl.NumberFormat().format(giderler); //
  kalanTd.innerText = new Intl.NumberFormat().format(gelirler-giderler);

  const borclu = gelirler - giderler < 0;
  kalanTd.classList.toggle("text-danger", borclu);
  kalanTh.classList.toggle("text-danger", borclu);
  console.log(borclu);
};

harcamaBody.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest("tr").remove();
  }

  const id = e.target.id;
  //
  harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id);
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  hesaplaVeGuncelle();
});

temizleBtn.addEventListener("click", (e) => {
  if (confirm("Verileri silmek istediğine emin misiniz?")) {
    harcamaListesi = []; //*tüm harcamaları listeden siler
    gelirler = 0; //*geliri sıfırlar
    // localStorage.clear()//*tüm local i siler
    localStorage.removeItem("gelirler");
    localStorage.removeItem("harcamalar");
    harcamaBody.innerHTML = "";
    hesaplaVeGuncelle();
  }
});
