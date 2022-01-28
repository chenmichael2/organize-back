const express = require('express');
const router = express.Router();
require('dotenv').config();
const db = require('../models');

router.post('/new', async (req, res) => {
    console.log('backend connected');
    console.log(req.body);
    let newProject = await db.Project.insertMany({
        user: req.body.user.id,
        projectName: req.body.project,
    })
    console.log('new project', newProject)
    return res.json({data: req.body})
})

router.post('/:id', async (req, res) => {
    console.log(req.params.id);
    return res.json({parameters: req.params});
})
module.exports = router;
