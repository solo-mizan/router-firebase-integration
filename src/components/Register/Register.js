import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Register here</h1>
            <button>Google sign up</button>
            <form>
                <input placeholder='Your name' type="text" name="" />
                <br />
                <input placeholder='Your email' type="email" name="" />
                <br />
                <input placeholder='Your Password' type="password" name="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;