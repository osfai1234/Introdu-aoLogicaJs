// funçao para comparar dois numeros 

function compararNumeros(num1,num2) {
if (num1>num2){
    return "o primeiro e maior que o segundo"
}

else if (num1<num2){
return "o primeiro e menor que o segundo"

}
else{
    return "os numeros sao iguais"
}
}

let resultados = compararNumeros(5,10)
console.log(resultados)