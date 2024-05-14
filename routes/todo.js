const express = require('express');
const router = express.Router();

// Mock database for demo purposes
let todos = [];

// GET route to render the todo list
router.get('/', (req, res) => {
  res.render('todo', { todos });
});

// POST route to add a new todo
router.post('/add', (req, res) => {
  const { task } = req.body;
  todos.push({ id: todos.length + 1, task });
  res.redirect('/');
});

// POST route to delete a todo
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.redirect('/');
});

module.exports = router;
