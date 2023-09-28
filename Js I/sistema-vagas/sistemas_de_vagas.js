const vagas = Array()

function listar() {
  const vagaEmTexto = vagas.reduce(function (text, vaga, indice) {
    text += indice + '. '
    text += vaga.nome
    text += ' (' + vaga.candidatos.length + ' Cadidatos)'
    return text
  }, '')
  alert(vagaEmTexto)
}

function criar() {
  const nome = prompt('Digite o nome da vaga.')
  const descricao = prompt('Descrição da vaga: ')
  const data = prompt('Data limite\nExemplo: 00/00/00')

  confirm(
    'Deseja registrar essa vaga?' +
      '\nNome: ' +
      nome +
      '\nDescrição: ' +
      descricao +
      '\nData Limite: ' +
      data
  )

  if (confirm) {
    const novaVaga = { nome, descricao, data, candidatos: [] }
    vagas.push(novaVaga)
  }
}

function vizualizar() {
  const indice = prompt('Qual o indice da vaga que você deseja ver?')

  if (indice >= vagas.length || indice < 0) {
    alert('Indice invalido')
    return
  }

  const vaga = vagas[indice]

  const candidadosEmTexto = vaga.candidatos.reduce(function (text, candidato) {
    return text + '\n - ' + candidato
  }, '')

  alert(
    'Indice: ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.data +
      '\nInscritos: ' +
      vaga.candidatos.length +
      '\nCandidatos inscritos: ' +
      candidadosEmTexto
  )
}

function inscrever() {
  const candidato = prompt('Seu nome é? ')
  const indice = prompt('Qual o indice da vaga que deseja?')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Deseja se cadastrar nessa vaga?\n' +
      'indice: ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.data
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert('Inscrição realizada')
  }
}

function excluir() {
  const indice = prompt('Qual o indice da vaga que você deseja excluir?')
  const vaga = vagas[indice]

  const confirmmacao = confirm(
    'Tem certeza que deseja excluir a vaga ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.data
  )

  if (confirmmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluida')
  }
}

function exibirMenu() {
  const opcao = prompt(
    'Escolha um item:\n' +
      '\n1: Listar vagas disponíveis' +
      '\n2: Criar um nova vaga' +
      '\n3: Visualizar uma vaga' +
      '\n4: Inscrever um candidato em uma vaga' +
      '\n5: Excluir uma vaga' +
      '\n6: Sair'
  )

  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()
    switch (opcao) {
      case '1':
        listar()
        break
      case '2':
        criar()
        break
      case '3':
        vizualizar()
        break
      case '4':
        inscrever()
        break
      case '5':
        excluir()
        break
      case '6':
        alert('Encerrando...')
        break
      default:
        alert('Erro!')
        break
    }
    console.log(vagas)
  } while (opcao !== '6')
}

executar()
