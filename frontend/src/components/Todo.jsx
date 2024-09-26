import React from 'react';
import { motion } from 'framer-motion';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className={`w-full flex items-center justify-between p-4 my-2 bg-white rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 ${
        todo.completed ? 'line-through text-gray-500' : 'text-black'
      }`}
    >
      <span>{todo.text}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => toggleComplete(todo._id)}
          className={`px-2 py-1 rounded-md ${
            todo.completed ? 'bg-yellow-300' : 'bg-green-300'
          }`}
        >
          {todo.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="px-2 py-1 text-white bg-red-500 rounded-md"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Todo;
