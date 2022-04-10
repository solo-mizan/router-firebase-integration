import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Home from '../Home/Home';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
            <span>{user?.displayName && user.displayName} </span>
            {
                user?.uid ? <button onClick={handleSignOut}>Sign out</button> : <Link to={'/register'}>Register</Link>
            }
        </nav>
    );
};

export default Header;