const express = require('express')

const db = require('./resources-model')

const router = express.Router()


router.get('/', (req, res, next) => {
    db.find()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    db.add(req.body)
        .then(newResource => {
            res.status(200).json(newResource);
        })
        .catch(next);
});

module.exports = router;
