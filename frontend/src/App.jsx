import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { motion } from 'framer-motion';
import './index.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    const res = await axios.post('http://localhost:5000/api/todos', newTodo);
    setTodos([...todos, res.data]);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo._id === id);
    await axios.put(`http://localhost:5000/api/todos/${id}`, {
      completed: !todo.completed,
    });
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo by ID
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      
      // Update state immediately after deletion
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      alert('Failed to delete todo. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-400 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Todo List
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </motion.div>
    </div>
  );
};

export default App;
