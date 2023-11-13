//*SELECTORS

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//*VARIABLES

let gelirler = 0;
let harcamaListesi = [];

//*HESAP TABLOSU

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");
const kalanTh = document.getElementById("kalanTh");
//*HARCAMA FORMU
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlanıInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//*HARCAMA TABLOSU

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//*EKLE FORMU

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.innerText = gelirler;
  ekleFormu.reset();
  hesaplaVeGuncelle();
});
//*sayfa yüklendiğinde depodaki gelirin ekrana yazılmasını sağladım
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
  tarihInput.valueAsDate = new Date();
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];
  harcamaListesi.forEach((harcama) => {
    harcamayiDomaYaz(harcama);
  });
  hesaplaVeGuncelle();
});

//*Harcama listesini Array e pushladık
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //!reload ı engeller
  const yeniHarcama = {
    id: new Date().getTime(),
    // tarih: tarihInput.value,
    tarih:new Date (tarihInput.value).toLocaleDateString(),
    alan: harcamaAlanıInput.value,
    miktar: miktarInput.value,
  };

  //   console.log(yeniHarcama);
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date(); //* ilk açılışta tarihin otomatik gelmesini sağladık

  harcamaListesi.push(yeniHarcama);
  //!Local storage de saklamak için string haline dönüştürüp locale pushladık
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);
  hesaplaVeGuncelle();
});

//*Harcamayı DOM' a yazmak

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const {id, miktar,tarih,alan}=yeniHarcama
  //   harcamaBody.innerHTML += `
  //    <tr>
  //    <td>${tarih}</td>
  //    <td>${alan}</td>
  //    <td>${miktar}</td>
  //    <td>${tarih}</td>
  //    <td> <i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i> </td>
  //    </tr>
  //    `;

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
//   gelirinizTd.innerText = gelirler;
  gelirinizTd.innerText = new Intl.NumberFormat().format(gelirler);

  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );
  giderinizTd.innerText = new Intl.NumberFormat().format(giderler);

  kalanTd.innerText = new Intl.NumberFormat().format(gelirler - giderler);

  const borclu = gelirler - giderler < 0;

  kalanTd.classList.toggle("text-danger", borclu);
  kalanTh.classList.toggle("text-danger", borclu);
};

harcamaBody.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("fa-trash-can")) {
    // e.target.parentElement.parentElement.remove()
    e.target.closest("tr").remove();
  }
  //?silinen harcamanın id sini alır
  const id = e.target.id;
  //?silinen harcamayı array den çıkarır
  harcamaListesi = harcamaListesi.filter((harcama => harcama.id != id));
  //? yeni array i local update eder
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  //?silindikten sonra yeniden hesapla
  hesaplaVeGuncelle();
});

temizleBtn.addEventListener("click",()=>{
    if(confirm("Silmek istediğinizden emin misiniz?")){
        harcamaListesi=[]
        gelirler=0
        //*localStorage.clear()
        localStorage.removeItem('gelirler')
        localStorage.removeItem('harcamalar')
        harcamaBody.innerHTML=""
        hesaplaVeGuncelle()
    }
})