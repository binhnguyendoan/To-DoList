import React, { useState } from 'react';
import './List.css';
import TodoList from '../ToDoList/TodoList';


const List = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObj = {
                id: Date.now(),
                content: newTask,
            };
            setTasks([...tasks, newTaskObj]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };
    return (
        <div className='list'>
            <h1> To-Do List</h1>
            <div className="add-task">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Thêm công việc..."
                />
                <button onClick={handleAddTask}>Thêm</button>
            </div>
            {tasks.length === 0 ? (
                <p>Danh sách công việc trống</p>
            ) : (
                <TodoList tasks={tasks} onDelete={handleDeleteTask} />
            )}
        </div>
    );
};

export default List;