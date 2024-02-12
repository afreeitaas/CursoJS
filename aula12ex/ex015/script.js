function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', './foto-bebe-m.jpg.jpg')
                document.body.style.background = '#aebbb3'
            } else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src', './foto-jovem-m.jpg.jpg')
                document.body.style.background = '#cd9733'
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './foto-adulto-m.jpg.jpg')
                document.body.style.background = '#0b57ef'
            } else {
                //idoso
                img.setAttribute('src', './foto-idoso-m.jpg.jpg')
                document.body.style.background = '#282e49'
            }
        } else if (fsex[1].checked) {
            gênero ='Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', './foto-bebe-f.jpg.jpg')
                document.body.style.background = '#db9dcd'
            } else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src', './foto-jovem-f.jpg.jpg')
                document.body.style.background = '#e58d64'
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './foto-adulto-f.jpg.jpg')
                document.body.style.background = '#843538'
            } else {
                //idoso
                img.setAttribute('src', './foto-idosa-f.jpg.jpg')
                document.body.style.background = '#9f7c48'
            }
        }
        res.style.textAlign = 'left'
        res.innerHTML = `Detectamos ${gênero} com  ${idade} anos.`
        res.appendChild(img)
    }
}