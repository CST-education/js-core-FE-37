// plugin
// libriary
// framework

//
const user = {
    name: 'Sandra',
    age: 31,
    skills: ['HTML', 'Css'],
}
console.log('user', user)

console.log(JSON)

const jsonUser = JSON.stringify(user)
console.log('jsonUser', jsonUser)

const parseUser = JSON.parse(jsonUser)
console.log('parseUser', parseUser)

import * as data from '../data/module-10.json'
console.log(data)