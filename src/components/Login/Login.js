import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();

    return (
        <div>
            <h1>Login here</h1>
            <button onClick={signInWithGoogle}>Google Login</button>
            <form>
                <input placeholder='Your email' type="email" name="" />
                <br />
                <input placeholder='Your Password' type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;