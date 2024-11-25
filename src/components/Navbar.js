import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>ChildBirth</h1>
            <ul>
                <li><a href="#home">หน้าแรก</a></li>
                <li><a href="#stages">ระยะคลอด</a></li>
                <li><a href="#contact">ติดต่อเรา</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
