import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Website</h1>
            <nav className="menu">
                <a href="#">Home</a>
                <a href="# ">Hi</a>
                <a href="#">There</a>
                <a href="#">Hello</a>
            </nav>
        </div>
    );
};

export default Header;