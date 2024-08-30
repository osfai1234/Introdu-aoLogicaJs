function funcaosegundograu(a,b,c){
// passo 1: calcular o delta
let delta = b*b-4*a*c

// passo 2: verificar se o delta é zero, negativo ou positivo

if (delta<0){

    // se o delta for negativo, a equação não tem raizes reais
    console.log("a equação não tem raizes reais")
}
else if (delta===0){

// se delta for igial a zero , a equaçao tem duas raizes iguais 

console.log("a equação não tem raizes reais")
}
else{      
 // se o delta for possitivo, tem raize diferente
let x1 = (-b + Math.sqrt(delta))/(2*a)
let x2 = (-b - Math.sqrt(delta))/(2*a)

console.log("a equaçao tem duas raizes reais: x1 ", x1, "e x2=",x2)

}

}

funcaosegundograu(1, -3,2)




