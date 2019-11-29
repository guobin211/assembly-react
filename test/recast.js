const recast = require('recast')

const code = `function add(a, b) {
  return a + b
}`

console.log(recast.parse(code))
