/*
  1º passo: Capturar os valores
  2º passo: Armazenar os valores de alguma forma
  3º passo: Funções para realizar os calculos 
  4º passo: Atualizar interface
 */

/*
  1º passo: Capturar os valores - OK
    a. capturar campos de entrada de valores
    b. capturar valores
    3 campos e 2 buttons
*/

/*
  2º passo: Armazenar os valores de alguma forma - OK
  o objeto irá armazenar os valores
*/

/*
  3º passo: Funções para realizar os calculos - OK
*/

/**
  4º passo: Atualizar interface - OK
 */

  // PRIMEIRO PREVE UM LAYOUT COM VALORES FIXOS E DEPOIS TORNA DINAMICO COM JS













const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0,
};

const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input')

const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button')

buttonOrcamento.addEventListener('click', capturarValorOrcamento)

function capturarValorOrcamento(){
    const valorOrcamento = Number(campoEntradaOrcamento.value)
    
    controleGastos.orcamento = valorOrcamento
    controleGastos.saldo = valorOrcamento

    atualizarInterface()
}

const campoNomeDespesa = document.querySelector('.formularioEntradaDespesa_nome')

const campoValorDespesa= document.querySelector('.formularioEntradaDespesa_valor')

const buttonDespesa = document.querySelector('.formularioEntradaDespesa button')

buttonDespesa.addEventListener('click', capturarValoresDespesa)

function capturarValoresDespesa(){
    const nomeDespesa = campoNomeDespesa.value
    const valorDespesa = Number(campoValorDespesa.value)

    controleGastos.despesas += valorDespesa
    controleGastos.saldo -= valorDespesa

    atualizarInterface()
    adicionarDespesaInterface(nomeDespesa, valorDespesa)
}

const orcamento = document.querySelector('.secaoImpressaoResultados_orcamento p')
const despesas = document.querySelector('.secaoImpressaoResultados_despesas p')
const saldo = document.querySelector('.secaoImpressaoResultados_saldo p')

function atualizarInterface(){
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}` // conteudo dos elementos é innerText 
    despesas.innerText = `- R$ ${controleGastos.despesas}`
    saldo.innerText = `R$ ${controleGastos.saldo}`// usar cresa é igual "+ R$" + controleGastos.saldo como se fosse uma concatenação
    
    
    
}

const listaDespesas = document.querySelector('.containerDespesas_lista')

function adicionarDespesaInterface(nomeDespesa, valorDespesa){
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')

    h3.innerText = nomeDespesa
    p.innerText = ` R$ ${valorDespesa}`

    img.src='./assets/img/trash.svg'
    img.alt='Icone lixeira'

    img.addEventListener('click', removerDespesa)

    li.dataset.valor = valorDespesa
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)

    listaDespesas.appendChild(li)
} 

function removerDespesa(evento){
    //console.log(evento.target) pego onde clico no caso img
    //console.log(evento.target.parentNode) capturar o pai de um elemento
    const despesaClicada = evento.target.parentNode;
  const valorDespesaClicada = Number(despesaClicada.dataset.valor);

  controleGastos.despesas -= valorDespesaClicada;
  controleGastos.saldo += valorDespesaClicada;

  atualizarInterface();
  despesaClicada.remove();
    
}