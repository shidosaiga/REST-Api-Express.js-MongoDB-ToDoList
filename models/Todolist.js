const mongoose = require('mongoose');

const TodolistSchema = new mongoose.Schema({
    todo_task: String,
    todo_completed: Boolean,
    update_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Todolist', TodolistSchema)