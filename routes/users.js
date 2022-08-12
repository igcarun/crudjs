const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        dept: req.body.dept,
        age: req.body.age
    })

    const save = await user.save()
    res.json(save);
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.patch('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    user.name = req.body.name;
    user.dept = req.body.dept;
    user.age = req.body.age;
    const al = await user.save();
    res.json(al);
})

router.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const del = await user.delete();
    res.json(del)
})

module.exports = router