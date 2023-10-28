//? Faktoriyel 

const faktoriyel = (n) => {
    let result =1
    for (let i = n; i>1; i--){
        result = result*i
    }
    return result
}

console.log(faktoriyel(5));

const faktoRekursif =(n) => {
    if (n<=1){
        return 1
    } else {
        return  n*faktoRekursif(n-1)
    }
   
}
console.log(faktoRekursif(5));