const express = require('express');
const router = express.Router();
require('dotenv').config();
const db = require('../models');

router.post('/', async (req, res) => {
    console.log('backend connected');
    console.log(req.body);
    // let findUser = await User.find({
    // })
    // console.log('find user', findUser);
    let newTask = await db.Task.insertMany({
        user: req.body.user,
        projects: req.body.projects,
        task: req.body.task,
        dateDue: req.body.date,
        checked: false,
    })
    console.log('new task', newTask)
    return res.json({data: req.body})
})

router.post('/todoList/:id', async (req, res) => {
    const id = req.params.id;
    let tasks = await Task.find({
        user: id,
    })
    return res.json({ tasks })
})

router.get('/projectTasks/:id', async (req, res) => {
    const id = req.params.id;
    let projectTasks = await Task.find({
        projects: id,
    })
    return res.json({projectTasks})
})

module.exports = router;
