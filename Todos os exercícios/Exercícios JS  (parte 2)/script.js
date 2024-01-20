function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('foto')
  var data = new Date()
  var hora = data.getHours()

 
  
  msg.innerHTML = `Agora são ${hora} horas.`
  
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    imagem.src = 'manha.jpg'
    document.body.style.background = '#B4A59C'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    imagem.src = 'tarde.jpg'
    document.body.style.background = '#958053'
  } else {
    //BOA NOITE
    imagem.src = 'noite.jpg'
    document.body.style.background = '#464D55'
  }
}
