const db = require('../../data/config')

module.exports = {
  find,
  findById,
  add
}

function find() {
  return db("projects")
}

function findById(id) {
  return db("projects")
        .where("id", id)
        .first()
}

function add(newProject) {
  return db("projects").insert(newProject)
}
