exports.seed = async function(knex) {
  await knex("tasks").truncate()
  await knex("tasks").insert([
    {id: 1, description: 'Description 1', notes: 'Note 1', is_complete: 'true'},
    {id: 2, description: 'Description 2', notes: 'Note 2', is_complete: 'false'},
    {id: 3, description: 'Description 3', notes: 'Note 3', is_complete: 'true'},
    {id: 4, description: 'Description 4', notes: 'Note 4', is_complete: 'false'}
  ])
};
