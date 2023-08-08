function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23

    msg.innerHTML = `Agora são ${hora} horas.`
    // BOM DIA
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        document.body.style.background = '#B2D977'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#9BB5BF'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#532259'
    }
}