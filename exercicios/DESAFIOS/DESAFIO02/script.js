function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'BEBE.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'JOVEM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'VELHO.jpg')
            } else {
                // I
            }






        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'BEBEF.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'JOVEMF.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'VELHOF.jpg')
            } else {
                // I
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}