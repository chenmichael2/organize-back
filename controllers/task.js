const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log('backend connected');
    console.log(req.body);
})

router.post('/todo', (req, res) => {
    try {
        object = {
            type: 'hello',
            date: 'date',
        }
        res.json({ object })
    }
    catch (err) {
        console.log(err);

    }
})

module.exports = router;
