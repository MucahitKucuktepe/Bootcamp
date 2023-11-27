const btnDivs = document.getElementById("btns");
const productDivs = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryTitle = document.getElementById("category");
const canvasBody = document.querySelector(".offcanvas-body");

const modalBody = document.querySelector(".modal-body");
const btnColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
];
let products = [];
let baskets = [];

const getProduct = async () => {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");

  const data = await res.json();
  // console.log(data);
  products = data;
  // console.log(products);
  category();
  displayProducts(products);
};
getProduct();

const category = () => {
  console.log(products);

  // const categoryArr=products.reduce((acc,item)=>{
  //     if(!acc.includes(item.category)){
  //         acc.push(item.category)
  //     }
  //     return acc
  // },["all"])
  // console.log(categoryArr);

  // let categoryArr2=["ALL"]

  // products.forEach(item=>{
  //     if(!categoryArr2.includes(item.category)){
  //         categoryArr2.push(item.category)
  //     }
  // })
  // console.log(categoryArr2);

  // const categoryArr3=["ALL3",...new Set(products.map(item=>{
  //     return item.category
  // }))]
  // console.log(categoryArr3);
  // //+ 1.yol
  // const categoryArr=products.reduce((acc,item)=>{
  //     if(!acc.includes(item.category)){
  //        acc.push(item.category)
  //     }
  // return acc
  // },["all"])
  // console.log(categoryArr);

  //+ 2.yol

  // let categoryArr=["all"]
  // products.forEach(item=>{
  //     if(!categoryArr.includes(item.category)){
  //         categoryArr.push(item.category)
  //     }
  // })
  // console.log(categoryArr);

  //+3.yol

  const categoryArr = [
    "all",
    ...new Set(
      products.map((item) => {
        return item.category;
      })
    ),
  ];
  console.log(categoryArr);

  //   categoryArr.forEach((category, i) => {
  //     const btn = document.createElement("button");
  //     btn.innerText = category.toUpperCase();
  //     btn.classList.add("btn",`btn-${btnColors[i]}`)
  //     btnDivs.appendChild(btn);
  //   });

  // categoryArr.forEach((category,i)=>{
  //     const btn=document.createElement("button")
  //     btn.innerText=category.toUpperCase()
  //     btn.classList.add("btn",`btn-${btnColors[i]}`)
  //     btnDivs.appendChild(btn)
  // })

  categoryArr.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", `btn-${btnColors[i]}`);
    btn.innerText = category.toUpperCase();
    btnDivs.appendChild(btn);
  });
};

//!ürünleri dom a bastırma işlemi

const displayProducts = (arr) => {
  productDivs.innerHTML = "";
  arr.forEach((item) => {
    const { id, description, price, title, image } = item;
    const productDiv = document.createElement("div");
    productDiv.classList.add("col");
    productDiv.setAttribute("id", id);

    productDiv.innerHTML = ` <div class="card">
             <img src="${image}" class="p-2" height="250px" alt="...">
            <div class="card-body">
      <h5 class="card-title line-clamp-1">${title}</h5>
               <p class="card-text line-clamp-3">${description}</p>
             </div>
             <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
             <span>Price:</span><span>${price} $</span>
                
             </div>
             <div class="card-footer w-100 d-flex justify-content-center gap-3">
                 <button class="btn btn-danger">
                 Sepete Ekle
                 </button>
                 <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 See Details
                 </button>
            </div>
           </div>`;
    productDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-danger")) {
        addToCart(item);
      }
    });
    productDivs.appendChild(productDiv);
  });
};

//!Sepete ekleme fonksiyonu

const addToCart = (product) => {
  console.log(product);
  if (baskets.some((item) => item.title === product.title)) {
    baskets = baskets.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    baskets.push(product);
  }
  console.log(baskets);
};

//!! FİLTRELEME İŞLEMLERİ

btnDivs.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const selectedCategory = e.target.innerText.toLowerCase();
    categoryTitle.innerText = selectedCategory.toUpperCase();
    const value = searchInput.value;
    const filteredProducts = filtered(selectedCategory,value)

    displayProducts(filteredProducts);
  }
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const selectedCategory = categoryTitle.innerText.toLowerCase();
  const filteredProducts = filtered(selectedCategory, value);
  displayProducts(filteredProducts);
});

function filtered(selectedCategory, value){
  const newArr =
    selectedCategory === "all"
      ? products
      : products.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory &&
            item.title.toLowerCase().includes(value.toLowerCase())
        );
  return newArr;
}

//! Modal kısmına ekleme

