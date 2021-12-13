import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-heading">
                    <h1>Login</h1>
                    <h2>Have an account?</h2>
                </div>
                <div className="login-form">
                    <input placeholder="  Username" />
                    <input placeholder="  Password" />
                    <button><h3>SIGN IN</h3></button>
                </div>
            </div>
        </div>
    )
}

export default Login;
