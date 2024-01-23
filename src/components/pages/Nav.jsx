import React from 'react';
import './List.css';
import { Link,NavLink,Outlet } from 'react-router-dom';

const LisLink = [
    {
        id: 1,
        to: '/',
        title: "Home"
    },
    {
        id: 2,
        to: '/about',
        title: "About"
    },
    {
        id: 3,
        to: '/todolist',
        title: "TodoList"
    },
]
const Nav = () => {
    return (
        <div>
        <div className='nav'>
        {LisLink.map((item) => (
            <Link to={item.to} key={item.id} >{item.title}</Link>

        ))}
            
      
        </div>
        <Outlet></Outlet>

        </div>
    );
};

export default Nav;