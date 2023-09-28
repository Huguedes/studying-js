function addContact() {
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'contato'

  const unOdernadList = document.createElement('ul')

  const nameList = document.createElement('li')
  nameList.innerHTML = '<label for="name">Nome</label>'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullName'
  nameInput.id = 'name-input'
  nameList.appendChild(nameInput)
  unOdernadList.appendChild(nameList)
  unOdernadList.appendChild(document.createElement('br'))

  const phoneList = document.createElement('li')
  phoneList.innerHTML = '<label for="phone">Telefone</label>'
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneInput.id = 'phone'
  phoneList.appendChild(phoneInput)
  unOdernadList.appendChild(phoneList)
  unOdernadList.appendChild(document.createElement('br'))

  const addressList = document.createElement('li')
  addressList.innerHTML = '<label for"address">Endereço</label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressList.appendChild(addressInput)
  unOdernadList.appendChild(addressList)
  unOdernadList.appendChild(document.createElement('br'))

  contactSection.append(h3, unOdernadList)
}

function removeContato() {
  const contactSection = document.getElementById('contacts-list')

  const text = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(text[text.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}
