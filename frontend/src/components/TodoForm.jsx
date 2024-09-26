import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo({
        text,
      });
      setText('');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center p-4 my-4 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        className="w-full p-2 mb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
