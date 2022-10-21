var agora = new Date() // recebe a hora atual do PC
var hora = agora.getHours() // pega as horas 

console.log(`Agora são ${hora} horas`)

if(hora<12){
    console.log('Bom dia')
} else if(hora <=18){
    console.log('Boa Tarde')
} else{
    console.log('Boa noite')
}