function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minute} horas.`
    if(hora >=4 && hora<12){
        //dia
        img.src= 'manha.png'
        document.body.style.background= '#eccb9a' // por código da cor de fudo
    } else if (hora >=12 && hora<19){
        //tarde
        img.src= 'tarde.png'
        document.body.style.background= '#c08833' 
    } else {
        //noite
        img.src= 'noite.png'
        document.body.style.background= '#747171' 
    }
}
