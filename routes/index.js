const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todolist = require('../models/Todolist.js');
/* GET home page. */
router.get('/', async (req, res, next)=> {
  const Checklist = await Todolist.find({}).select({todo_task:1,todo_completed:1,_id:0});
  res.render('index', { title: 'Express', Checklist});
});

// router.get('/', async(req,res,next)=>{
//   const todoLists = await Todolist.find({}) ;  
//   const Convert = res.json(todoLists);
//   console.log(Convert)
// })





module.exports = router;
