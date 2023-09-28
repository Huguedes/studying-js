const personagens = [
  { nivel: 42, nome: 'Thrall', raca: 'Orc', classe: 'Xamã' },
  { nivel: 28, nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Varok', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
  { nivel: 26, nome: 'Jaina', raca: 'Humano', classe: 'Maga' },
  { nivel: 39, nome: 'Tyrande', raca: 'Elfo Noturno', classe: 'Sacerdotisa' },
  { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' }
]

// Map
// Mostrando sem o map
const nomes = Array()

for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}
// Com o map
const names = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)
console.log(names)

// Filter
// Sem o filter
const orcs = Array()

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === 'Orc') orcs.push(personagens[i])
}

console.log(orcs)

// Com o Filter
const orcss = personagens.filter(function (personagem) {
  return personagem.raca === 'Orc'
})

console.log(orcss)

// Reduce
// Sem o reduce

const nivelTotal = personagens.reduce(function (valor, personagem) {
  return valor + personagem.nivel
}, 0)

console.log(nivelTotal)

// organizando com reduce

const racas = personagens.reduce(function (valor, personagem) {
  if (valor[personagem.raca]) {
    valor[personagem.raca].push(personagem)
  } else {
    valor[personagem.raca] = [personagem]
  }
  return valor
}, {})

console.log(racas)

// Sort

const perso = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel
})

console.log(personagens)
console.log(perso)
