const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todolist = require('../models/Todolist.js');

router.get('/', async (req, res, next) => {
    // Todolist.find((err, todolists) => { 
    //     if (err) return next(err);           // Old mongoose version script 6.8.3
    //     res.json(todolists);
    // })
    const todoLists = await Todolist.find({}) ;  //New mongoose version script
    res.json(todoLists);
});

router.get('/:id', async (req, res, next) => {
    // Todolist.findById(req.params.id, (err, post) => {
    //     if (err) return next(err);
    //     res.json(post);
    // })
    const todoFindById = await Todolist.findById(req.params.id);
    res.json(todoFindById);
});

router.post('/', async (req, res, next) => {
    // Todolist.create(req.body, (err, post) => {
    //     if (err) return next(err);
    //     res.json(post);
    // })

    const todoCreate = await Todolist.create(req.body);
    res.json(todoCreate);
});

router.put('/:id', async (req, res, next) => {
    // Todolist.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    //     if (err) return next(err);
    //     res.json(post);
    // })

    const todoUpdate = await Todolist.findByIdAndUpdate(req.params.id, req.body);
    res.json(todoUpdate);
});

router.delete('/:id',async (req, res, next) => {
    // Todolist.findByIdAndDelete(req.params.id, (err, post) => {
    //     if (err) return next(err);
    //     res.json(post);
    // })

    const todoDelete = await Todolist.findByIdAndRemove(req.params.id);
    res.json(todoDelete);

});

module.exports = router;