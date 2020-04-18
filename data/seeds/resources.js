exports.seed = async function(knex) {
  await knex("resources").truncate()
  await knex("resources").insert([
    {id: 1, resource_name: "Resource 1", description: "Description 1"},
    {id: 2, resource_name: "Resource 2", description: "Description 2"},
    {id: 3, resource_name: "Resource 3", description: "Description 3"},
    {id: 4, resource_name: "Resource 4", description: "Description 4"}
  ])
};
