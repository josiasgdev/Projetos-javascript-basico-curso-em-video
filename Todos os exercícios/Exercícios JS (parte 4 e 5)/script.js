function contar() {
  var inicio = document.getElementById('continicio')
  var passo = document.getElementById('contpasso')
  var fim = document.getElementById('contfim')
  var res = document.getElementById('res')
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar, reveja os dados!'
    window.alert('[ERRO]Faltam dados!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido. Considerando PASSO 1!')
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += `\u{1f3c1}`
    } else {
      for (c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += `\u{1f3c1}`
    }
  }
}
