
const peso = Number(document.querySelector('.peso').value)
const altura = Number(document.querySelector('.altura').value)
const nascimento = Number(document.querySelector('.nascimento').value)

const calcular = document.querySelector('.calcular')

const classificacao = document.querySelector('.classificacao')
const idade = document.querySelector('.idade')
const imc = document.querySelector('.imc')

console.log(peso)
calcular.addEventListener('click', calcularIMC)

function calcularIMC(){
    
    
    data = new Date
    var ano = data.getFullYear();

    idade.innerText = ano - nascimento
    const imc_teste = (peso/(altura*altura))
    imc.innerText = (peso/(altura*altura))

    if(imc_teste < 18.5){
        classificacao.innerText = "magreza"
    } else if(imc_teste >=18.5 && imc_teste <= 24.9){
        classificacao.innerText = "normal"
    } else if(imc_teste >=25.0 && imc_teste <= 29.9){
        classificacao.innerText = "sobrepeso"
    }else if(imc_teste >=30.0 && imc_teste <= 9.9){
        classificacao.innerText = "obesidade"
    } else if(imc_teste > 40.0){
        classificacao.innerText = "obesidade grave"
    }
   

    

}