const pi = 3.14
let altura = ''
let base = ''
let lado = ''
let bmaior = ''
let bmenor = ''
let raio = ''
let opc = ''

do {
  opc = prompt(
    'Escolha uma função da calculadora:' +
      '\n1: Área do triângulo' +
      '\n2: Área do retângulo' +
      '\n3: Área do quadrado' +
      '\n4: Área do trapézio' +
      '\n5: Área do círculo' +
      '\n6: Sair'
  )
  switch (opc) {
    case '1':
      base = prompt('Digite a base')
      altura = prompt('Digite a altura')
      alert(triangulo(base, altura))
      break
    case '2':
      base = prompt('Digite a base')
      altura = prompt('Digite a altura')
      alert(retangulo(base, altura))
      break
    case '3':
      lado = prompt('Digite o lado')
      alert(quadrado(lado))
      break
    case '4':
      bmaior = prompt('Digite a base maior')
      bmenor = prompt('Digite a base menor')
      altura = prompt('Digite a altura')
      alert(trapezio(bmaior, bmenor, altura))
      break
    case '5':
      raio = prompt('Digite o raio')
      alert(circulo(pi, raio))
      break
    case '6':
      alert('Encerrando...')
      break
    default:
      alert('Erro!')
      break
  }
} while (opc !== '6')

function triangulo(b, a) {
  return (b * a) / 2
}

function retangulo(b, a) {
  return b * a
}

function quadrado(l) {
  return l * l
}

function trapezio(bmaior, bmenor, a) {
  return ((bmaior + bmenor) * a) / 2
}

function circulo(pi, r) {
  return pi * (r * r)
}
