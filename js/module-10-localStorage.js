console.log(localStorage)
const form = document.querySelector('.form')
console.dir(form)

form.addEventListener('input', (e) => {
  //   console.log(e.target.name)
  if (e.target.name === 'firstInput') {
    localStorage.setItem('firstInput-data', e.target.value)
  } else if (e.target.name === 'secondInput') {
    localStorage.setItem('secondInput-data', e.target.value)
  } else {
    alert(`Что-то пошло не так!`)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const { firstInput, secondInput } = e.target.elements
  const obj = {
    firstInput: firstInput.value,
    secondInput: secondInput.value,
  }
  localStorage.setItem('obj', JSON.stringify(obj)) // тут отправляемна бек
  localStorage.removeItem('firstInput-data')
  localStorage.removeItem('secondInput-data')
  firstInput.value = ''
  secondInput.value = ''
})

form.elements.firstInput.value = localStorage.getItem('firstInput-data')
form.elements.secondInput.value = localStorage.getItem('secondInput-data')
