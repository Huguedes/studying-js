const imoveis = []
let opcao = ''

do {
  opcao = prompt(
    'Bem vindo\n' +
      'Total de imoveis: ' +
      imoveis.length +
      '\n\nEscolha uma opc:\n1. Novo imovel\n2. Listar imoveis\n3. Sair'
  )

  switch (opcao) {
    case '1':
      const imovel = {}

      imovel.proprietario = prompt('Informe o nome do proprietário')
      imovel.quarto = prompt('Quantos quartos tem no imóvel?')
      imovel.banheiro = prompt('Quantos banheiros?')
      imovel.garagem = prompt('Tem garagem? (sim/não)')

      const comfirmar = confirm(
        'Deseja salvar esse imóvel?\n' +
          '\nProprietário: ' +
          imovel.proprietario +
          '\nQuantidade de quartos: ' +
          imovel.quarto +
          '\nQuantidade de Banheiros: ' +
          imovel.banheiro +
          '\nGaragem: ' +
          imovel.garagem
      )

      if (comfirmar) {
        imoveis.push(imovel)
      }

      break
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          'Imovel ' +
            (i + 1) +
            '\nProprietário: ' +
            imoveis[i].proprietario +
            '\nQuartos: ' +
            imoveis[i].quarto +
            '\nBanheiros: ' +
            imoveis[i].banheiro +
            '\nGaragem? ' +
            imoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Encerrando')
      break
    default:
      alert('Erro!')
      break
  }
} while (opcao !== '3')
