
var nome 
var salario 
var porcentagem 

quest()

console.log(`Nome: ${nome}, Salário Atual:  ${salario}`)


informar()

console.log(Calculator(salario, porcentagem))




function quest(){
    nome = prompt("Qual o seu nome ?")
    salario = parseFloat(prompt("Qual o seu Salário Atual ?"))
}

function informar(){

    if(salario <= 1500){
        porcentagem = 1.20
    }
    
    if(salario >= 1501){
        porcentagem = 1.15
    }
    
    if(salario >= 2001){
        porcentagem = 1.10
    }
    
    if(salario >= 3001){
        porcentagem = 1.05
    }

    return porcentagem
}

function Calculator(salario){

    console.log(`A Porcetagem é ${porcentagem}`)
    return (`Parábens você teve um aumento ! Salario Atual: ${salario * porcentagem}`)
   
}