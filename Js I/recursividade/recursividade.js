// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
  console.log(num)
  if (num % 2 === 0) {
    dividir(num / 2)
  } else {
    return num
  }
}
dividir(256)

function fat(num) {
  if (num === 0) {
    return 1
  } else if (num === 1) {
    return 1
  } else {
    console.log(num + ' * !' + (num - 1))
    return num * fat(num - 1)
  }
}

console.log(fat(5))
