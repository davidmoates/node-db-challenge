const db = require('../../data/config')

module.exports = {
  find,
  add
}

function find() {
  return db("tasks")
        .select("projects.project_name as project name")
        .select("projects.description as project description")
        .select("tasks.description as task description")
        .select("tasks.notes as task notes")
        .select("projects.id as project id")
        .join("projects", "tasks.project_id", "=", "projects.id")
}


function add(newTask) {
  return db("tasks").insert(newTask)
}
