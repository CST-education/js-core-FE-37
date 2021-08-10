const a = {}
console.log(a)
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 1
a[c] = 3

console.log(a[b])
