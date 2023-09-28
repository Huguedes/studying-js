let pessoa = {
  nome: 'fulano',
  idade: 23,
  dizerOla() {
    console.log('Ola, mundo! Meu nome é ' + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()
