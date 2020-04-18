const express = require('express')

const db = require('./tasks-model')

const router = express.Router()


router.get('/', (req, res, next) => {
    db.find()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

router.post('/', (req, res, next)  => {
    db.add(req.body)
        .then(newTask => {
            res.status(200).json(newTask);
        })
        .catch(next);
});

module.exports = router;
