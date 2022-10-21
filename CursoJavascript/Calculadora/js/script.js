/*
    1º receber os valores
    3º Funcionalidade
    4º printar resultado
*/

const primeiroValor = Number(document.querySelector('.valor1').value)
const segundoValor = Number(document.querySelector('.valor2').value)
const somar = document.querySelector('.somar')
const subtrair = document.querySelector('.subtrair')
const multiplicacao = document.querySelector('.multiplicacao')
const dividir = document.querySelector('.dividir')

const resultado = document.querySelector('.imprimindoResultados h3')

somar.addEventListener('click', somarValores)
subtrair.addEventListener('click', subtrairValores)
multiplicacao.addEventListener('click', multiplicarValores)
dividir.addEventListener('click', dividirValores)

function somarValores(){
    //const valor1 = Number(primeiroValor.value)
    //const valor2 = Number(segundoValor.value)
    //resultado.innerText = valor1 + valor2
    resultado.innerText = primeiroValor + segundoValor  
}

function subtrairValores(){
    //const valor1 = Number(primeiroValor.value)
    //const valor2 = Number(segundoValor.value)
    //resultado.innerText = valor1 + valor2
    resultado.innerText = primeiroValor - segundoValor  
}

function multiplicarValores(){
    //const valor1 = Number(primeiroValor.value)
    //const valor2 = Number(segundoValor.value)
    //resultado.innerText = valor1 + valor2
    resultado.innerText = primeiroValor * segundoValor  
}

function dividirValores(){
    //const valor1 = Number(primeiroValor.value)
    //const valor2 = Number(segundoValor.value)
    //resultado.innerText = valor1 + valor2
    if(segundoValor == 0){
        resultado.innerText = "Operação Inválida"
    } else{
        resultado.innerText = primeiroValor / segundoValor  
        }
}