const db = require('../../data/config')

module.exports = {
  find,
  add
}

function find() {
  return db("resources")
}


function add(newResource) {
  return db("resources").insert(newResource)
}
