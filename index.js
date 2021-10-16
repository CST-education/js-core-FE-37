// MODULES

// import './js/module-1-1.js'
// import './js/module-1-2.js'

// import './js/module-2-1-arrays.js'
// import './js/module-2-2-functions.js'
// import './js/module-3-objects.js'

// import './js/module-3-destructuring.js'
// import './js/module-3-spread-rest.js'

// import './js/module-4-cb.js'
// import './js/module-4-stack.js'
// import './js/module-4-closure.js'
// import './js/module-4-this.js'

// import './js/module-5-constructors.js'
// import './js/module-5-classes.js'

// import './js/module-6-pure-func.js'
// import './js/module-6-methods.js'
// import './js/module-6-methods-short.js'

// import './js/module-7-DOM.js'
// import './js/module-7-events.js'

// import './js/module-8-propagation.js'
// import './js/module-8-throttle.js'
// import './js/module-8-debounce.js'
// import './js/module-8-IntersectionObserver.js'

// import './js/module-10-JSON.js'
// import './js/module-10-localStorage.js'
import './js/module-12-fetch.js'

// PRACTICE
// import './practice/module-3.js'
// import './practice/module-4.js'
// import './practice/module-5.js'
// import './practice/module-6.js'

// import './practice/core-repeat.js'

// import './js/this.js'

// =====================================
const inputSearch = document.getElementById('searchValue')
inputSearch.addEventListener(
  'input',
  _.debounce((e) => {
    //   e.preventDefault(); - для формы
    console.log('VALUE:', e.target.value)
    if (e.target.value.length > 0) {
      fetchCountries(e.target.value)
        .then((r) => {
          console.log(r)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, 500),
)

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then((response) => {
      if (response.status !== 404) {
        return response.json()
      }
    })
    .catch((error) => {
      const myError = notice({
        text: 'Error 404.',
        modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
      })
    })
}
