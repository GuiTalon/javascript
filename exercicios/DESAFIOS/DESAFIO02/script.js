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
                document.body.style.background = '#BFB1B0'
            } else if (idade < 21) {
                img.setAttribute('src', 'JOVEM.jpg')
                document.body.style.background = '#730202'
            } else if (idade < 50) {
                img.setAttribute('src', 'VELHO.jpg')
                document.body.style.background = '#404040'
            } else {
                img.setAttribute('src', 'veio.jpg')
                document.body.style.background = '#9FA7BF'
            }






        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'BEBEF.jpg')
                document.body.style.background = '#F2C2CF'
            } else if (idade < 21) {
                img.setAttribute('src', 'JOVEMF.jpg')
                document.body.style.background = '#BF7892'
            } else if (idade < 50) {
                img.setAttribute('src', 'VELHOF.jpg')
                document.body.style.background = '#A6243C'
            } else {
                img.setAttribute('src', 'veia.jpg')
                document.body.style.background = '#8C8C8C'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}