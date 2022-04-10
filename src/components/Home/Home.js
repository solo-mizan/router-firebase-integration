import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const Home = () => {

const {user} = useFirebase();

    return (
        <div>
            <h1>This is home</h1>
            <p>Current user is: {user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;