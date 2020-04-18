const express = require("express")
const helmet = require("helmet")

const projects = require('./planner/projects/projects-router');
const tasks = require('./planner/tasks/tasks-router');
const resources = require('./planner/resources/resources-router');

const server = express()
const port = process.env.PORT || 9000

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projects);
server.use('/api/resources', resources);
server.use('/api/projects/:id/tasks', tasks)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
