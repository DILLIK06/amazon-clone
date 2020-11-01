import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = e => {
        e.preventDefault();

        // firebase Login
    };

    const register = e => {
        e.preventDefault();

        // firebase register
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="header_logo" className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-clone" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" vlaue={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="Password" vlaue={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signInButton">Sign-In</button>
                </form>
                <p>By signing-in you agree to AMAZON FAKE CLONE conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
