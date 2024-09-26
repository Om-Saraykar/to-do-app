import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <motion.div layout className="flex flex-col items-center space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;
