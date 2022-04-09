import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    );
};

export default Header;