// window.addEventListener('click', callback)

// function callback(params) {
//   console.log(`click случился`)
// }

// ======== самые распространенные события =========

// с формой: submit (при Enter || bytton.type="submit")
// input - болтливое событие ввода данных
// change

// клавиатура: keydown, keypress, keyup

// click

// focus & blur
// ======== самые распространенные события =========
const form = document.querySelector('.form')
// console.log(form)

form.addEventListener('submit', (event) => {
  event.preventDefault() // останавливаем дефолтную отправку формы
  //   console.log('отправка формы произошла', event)
  //   //   console.log(event.target.children.firstInput.value)
  //   console.log(event.target.elements.firstInput.value)

  //   //   console.log(event.target.children.secondInput.value)
  //   console.log(event.target.elements.secondInput.value)
})

form.addEventListener('input', (evt) => {
  //   console.log(evt.target.value)
})

form.addEventListener('change', (e) => {
  //   console.log('change', e.target.value)
})
const firstInput = document.querySelector('[name="firstInput"]')

firstInput.addEventListener('focus', (e) => {
  //   console.log('focus:', e.target.value)
})

firstInput.addEventListener('blur', (e) => {
  //   console.log('blur:', e.target.value)
})

// =============
// e.code - стандартизированное имя клавиши
// e.key - значение клавиши, согласно языковой разметки
function getDown(e) {
  console.log('keydown', e.code, e.key)
}

window.addEventListener('keydown', getDown)

window.addEventListener('keypress', (e) => {
  // у системных клавиш его нет!!!
  console.log('keypress', e.code, e.key)
})
window.addEventListener('keyup', (e) => {
  console.log('keyup', e.code, e.key)
})
// ==========

form.addEventListener('click', (e) => {
  console.log(e)
})

const decBtn = document.getElementById('dec')
const incBtn = document.getElementById('inc')
const counter = document.getElementById('count')

console.log([...form.children])

function getCouter() {
  let count = 0
  function dec() {
    return (count -= 1)
  }
  function inc() {
    return (count += 1)
  }

  return { dec, inc }
}
const c = getCouter()
console.log(c)

function decCb() {
  console.log(`click`)
  let result = c.dec()
  console.log(result)
  counter.textContent = result
  window.removeEventListener('keydown', getDown)
}

decBtn.addEventListener('click', decCb)

incBtn.addEventListener('click', () => {
  let result = c.inc()
  counter.textContent = result
})

// elem.addEventListener('click', callback)
// elem.removeEventListener('click', callback)

galleryCollection.addEventListener('click', (evt) => {
    
  window.addEventListener('keydown', onEscKeyPress)
})

galleryCollection.addEventListener('click', (evt) => {
  window.addEventListener('keydown', (e) => console.log(evt))
})
