import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import List from './components/pages/List';
import Home from './components/pages/Home';
import About from './components/pages/About';
import TodoList from './components/ToDoList/TodoList';
import Nav from './components/pages/Nav';



function App() {
  return (
    <div className="app">

      <Routes>
        <Route path='/' element={<Nav></Nav>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/ToDoList' element={<List></List>}></Route>
        </Route>
        <Route path='*' element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
