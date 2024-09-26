const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });
    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    console.log('Delete request for ID:', req.params.id);

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ msg: 'Invalid ID format' });
    }

    const result = await Todo.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error('Error deleting todo:', err.message); // Log the error
    res.status(500).send('Server Error');
  }
});




// Toggle completion
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });

    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
