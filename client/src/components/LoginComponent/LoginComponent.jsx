import React from 'react';
import "./LoginComponentStyle.css";
import { Link } from "react-router-dom";

const LoginComponent = ({
  handleSubmit,
  handleUsername,
  handlePassword,
  username,
  password,
}) => {
    return (
        <div>
            <h2>Login to your Account</h2> 
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <ul className="wrapper">
                        <li className="form-row">
                            <label>User Name:</label>
                            <input 
                            type="text" 
                            id="name"
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            required/>
                        </li>
                        <li className="form-row">
                            <label>Password: </label>
                            <input
                            type="text" 
                            id="townborn"
                            value={password}
                            onChange={handlePassword}
                            type="text"
                            name="password"
                            />
                        </li>
                        <li className="form-row">
                            <button type="submit">Log In</button>
                        </li>
                        <Link to={`/index`}>
                            <li className="form-row">
                                <button type="submit" id="loginButton">Log In With Google!</button>
                            </li>
                        </Link>
                    </ul>
                </form>
            </div>
        </div>
    );
};


export default LoginComponent;