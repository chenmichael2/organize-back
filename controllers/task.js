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

router.post('/currentTask/:id', async (req, res) => {
    const id = req.params.id;
    let task = await Task.find({
        _id: id,
    })
    return res.json({ task })
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

router.post('/taskchangetrue/:id', async (req, res) => {
    const id = req.params.id;
    let taskTrue = await Task.updateOne({
        _id: id,
    }, {
        checked: true,
    })
    // console.log(taskTrue)
    return res.json({taskTrue})
})

router.post('/taskchangefalse/:id', async (req, res) => {
    const id = req.params.id;
    let taskFalse = await Task.updateOne({
        _id: id,
    }, {
        checked: false,
    })
    // console.log(taskFalse)
    return res.json({taskFalse})
})

router.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    let updated = await Task.updateOne({
        _id: id,
    }, {
        task: req.body.task,
        dateDue: req.body.date,
    })

    return res.json({updated})
})


module.exports = router;
