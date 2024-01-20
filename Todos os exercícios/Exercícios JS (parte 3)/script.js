function verificar() {
  var data = new Date()
  var ano = data.getUTCFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else if (fano.value.length == 0) {
      window.alert('[ERRO] Insira o ano de nascimento!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
          genero = 'Homem'
          if (idade >= 0 && idade < 5){
            //bebê
            img.setAttribute('src', 'bebezinho.jpg')
          }else if (idade < 10){
            //criança
            img.setAttribute('src', 'menininho.jpg' )
          }else if (idade < 16){
            //adolescente
            img.setAttribute('src', 'menino.jpg')
          }else if (idade <21){
            //jovem
            img.setAttribute('src', 'rapaz.jpg')
          }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'homem.jpg')
          }else if (idade < 60){
            //idoso
            img.setAttribute('src', 'idoso1.jpg')
          }else {
            //idoso2
            img.setAttribute('src', 'idoso 2.jpg')
          }
             
        }else if (fsex[1].checked){
          genero = 'Mulher'
          if (idade >= 0 && idade < 5){
            //bebê
            img.setAttribute('src', 'bebezinha.jpg')
          }else if(idade < 10){
            //criança
            img.setAttribute('src', 'menininha.jpg')
          }else if(idade <16){
            //adolescente
            img.setAttribute('src', 'menina.jpg')
          }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'moca.jpg')
          }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'mulher.jpg')
          }else if (idade <60){
            //idoso
            img.setAttribute('src', 'idosa1.jpg')
          }else {
            //idoso2
            img.setAttribute('src', 'idosa2.jpg')
          }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        res.appendChild(img)
        
    }
  }

