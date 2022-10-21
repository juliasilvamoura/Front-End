

function carregar(){
let msg = window.document.getElementById('mensagem')
let img = window.document.getElementById('imagem')
let data = new Date;
let hora = data.getHours()
let min = data.getMinutes()


msg.innerText = `São ${hora}:${min} hora`


if(hora >= 0 && hora < 12){
    img.scr = './img/manha.jpg'
    img.alt = "foto manhã"
} else if(hora >=12 && hora < 18){
    img.scr = "./img/tardejpg.jpg"
    img.alt = "foto tarde"
} else if(hora>=18){
    img.scr = "./img/noite.jpg"
    img.alt = "foto noite"
}

}