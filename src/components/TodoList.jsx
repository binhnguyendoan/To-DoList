// src/components/TodoList.js
import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
