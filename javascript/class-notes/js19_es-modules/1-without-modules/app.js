console.log("APP JS")

const h1 = document.querySelector("h1")

h1.textContent = "Without module"

const users = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

const products = [
  {
    phone: "Iphone",
    type: "15Pro",
    price: 50000,
  },
  {
    phone: "Samsung",
    type: "S23",
    price: 40000,
  },
  {
    phone: "Huawei",
    type: "Mate60",
    price: 45000,
  },
]
console.log("toplam Fiyat:", calculatePrice(products));
