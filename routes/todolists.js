const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todolist = require('../models/Todolist.js');

router.get('/', (req, res, next) => {
    Todolist.find((err, todolists) => {
        if (err) return next(err);
        res.json(todolists);
    })
})

router.get('/:id', (req, res, next) => {
    Todolist.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.post('/', (req, res, next) => {
    Todolist.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.put('/:id', (req, res, next) => {
    Todolist.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.delete('/:id', (req, res, next) => {
    Todolist.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})




module.exports = router;