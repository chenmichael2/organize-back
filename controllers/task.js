const express = require('express');
const router = express.Router();
require('dotenv').config();
const { Task } = require('../models');
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    console.log('backend connected');
    console.log(req.body);
    // let findUser = await User.find({
    // })
    // console.log('find user', findUser);
    let newTask = await Task.insertMany({
        user: req.body.user.id,
        task: req.body.task,
        dateDue: req.body.date,
        checked: false,
    })
    console.log('new task', newTask)
    return res.json({data: req.body})
})

module.exports = router;
