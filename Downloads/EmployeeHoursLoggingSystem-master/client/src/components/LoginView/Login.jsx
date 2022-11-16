import React, { useState } from "react";
import Axios from 'axios';

export const Login = () => {
    const [useridReg, setUserIdReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    /*     const handleSubmit = (e) => {
            e.preventDefault();
            console.log(userid);
        } */
    const register = () => {
        Axios.post('http://localhost3001/register', {
            username: useridReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div id="auth-form-container">
            <p id="title">Welcome to the Employee Time Management System</p>
            <form id="login-form">
                <label htmlFor="userid">User ID</label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setUserIdReg(e.target.value);
                    }}
                value={useridReg} />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }} />
                <button onClick={register}>Register</button>
            </form>
            
        {/*<form id="login-form">
                <label htmlFor="userid">User ID</label>
                <input value={userid} onChange={(e) => setUserId(e.target.value)} type="text" id="userid" name="userid" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                <button>Login</button>
         </form>*/}
             

        </div>
    )
}