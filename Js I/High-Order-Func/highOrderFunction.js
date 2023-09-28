function calcular(a, b, operacao) {
  console.log('Realizando uma operação.')
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y) {
  console.log('Realizando uma soma.')
  return x + y
}

// usando uma outra função
console.log(calcular(3, 5, somar))

// com função anônima
console.log(
  calcular(20, 13, function (x, y) {
    console.log('Realizando uma subtração')
    return x - y
  })
)

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ['Maçâ', 'Banana', 'Mamão']
// Using normal function
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

// Using function with high order function
lista.forEach(exibirElemento)

// Using function with high order function and anonymous function
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})
