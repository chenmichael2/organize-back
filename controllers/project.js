const express = require('express');
const router = express.Router();
require('dotenv').config();
const Project = require('../models/Project');

router.post('/new', async (req, res) => {
    console.log('backend connected');
    console.log(req.body);
    let newProject = await Project.insertMany({
        user: req.body.user,
        projectName: req.body.projectName,
    })
    console.log('new project', newProject)
    return res.json({data: req.body})
})

router.post('/:id', async (req, res) => {
    // console.log(req.params.id);
    let project = await Project.find({
        user: req.params.id
    })
    return res.json({data: project});
})


router.post('/delete/:id', async (req, res) => {
    // console.log(req.params.id);
    let deleteProject = await Project.deleteOne({
        _id: req.params.id
    })
    return res.json({data: deleteProject});
})

module.exports = router;
