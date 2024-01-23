import React from 'react';

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <span>{task.content}</span>
            <button onClick={() => onDelete(task.id)}>Xóa</button>
        </div>
    );
};

export default Task;