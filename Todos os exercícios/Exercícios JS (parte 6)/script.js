function tabuada() {
  var num = document.getElementById('numero')
  var tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    tab.innerText = ''
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option')
      item.text = `${n} x ${i} = ${n * i}`
      tab.appendChild(item)
    }
  }
}
