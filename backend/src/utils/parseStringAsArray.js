const axios = require('axios')

module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim())
}