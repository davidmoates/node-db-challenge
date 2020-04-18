const express = require('express')

const db = require('./projects-model')

const router = express.Router()


router.get('/', (req, res, next) => {
    db.find()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(next);
});




router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    db.findById(id)
    .then(projects => {
    if (projects) {
      res.json(projects);
    } else {
      res.status(404).json({ message: 'Could not find projects with given id.' })
    }
  })
    .catch(next);
});



router.post('/', (req, res, next) => {
    db.add(req.body)
        .then(newProject => {
            res.status(200).json(newProject);
        })
        .catch(next);
});

module.exports = router;
