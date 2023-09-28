function register(ev) {
  alert('Botão clicado')
  console.log(ev)
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert('User ' + username + ' foi registrado com sucesso.')
  } else {
    alert('As senhas não são iguais.')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListener() {
  button.removeEventListener('click', register)
}

button.addEventListener('mouseover', function (ev) {
  console.log(ev.currentTarget)
})
