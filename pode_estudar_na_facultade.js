function pedeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade){
    return concluiuEnsinoMedio &&idade>=18 &&!cursandoOutrafaculdade
}
//dados para testar a funçao 
let concluiuEnsinoMedio = true // sin concçuir
let idade = 22 // definindo idade
let cursandoOutrafaculdade = false // false para decir que nao

//verifique se pede estudar na facudade 
let resultados = pedeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade)




// exibiendo o resultados
if(resultados){
    console.log("voce pode entrar na facudade")
}
else{
    console.log("voce nao entrar na facudade")
}
