exports.seed = async function(knex) {
  await knex("projects").truncate()
  await knex("projects").insert([
    {id: 1, name: 'Project 1', description: 'Description 1', is_complete: 'true'},
    {id: 2, name: 'Project 2', description: 'Description 2', is_complete: 'false'},
    {id: 3, name: 'Project 3', description: 'Description 3', is_complete: 'true'},
    {id: 4, name: 'Project 4', description: 'Description 4', is_complete: 'false'},
  ])
};
