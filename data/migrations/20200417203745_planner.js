
exports.up = async function(knex) {
  await knex.schema.createTable("projects", table => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description").notNull()
      table.boolean("is_complete")
    })

    await knex.schema.createTable("tasks", table => {
      table.increments("id")
      table.text("description").notNull()
      table.text("notes")
      table.integer("project_id")
            .references("id")
            .inTable("projects")
      table.boolean("is_complete")
    })

    await knex.schema.createTable("resources", table => {
      table.increments("id")
      table.text("resource_name").notNull().unique()
      table.text("description")
    })

    await knex.schema.createTable("projects_resources", table => {
      table.integer("project_id")
            .references("id")
            .inTable("projects")
      table.integer("resource_id")
      .references("id")
      .inTable("resources")
      table.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("projects")
};
