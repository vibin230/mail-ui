import React from "react";
import { Link } from "react-router-dom";

import "./LoginForm.scss";

export const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="login-inputAlignment">
            <div className="login-inputLabelContainer">
              <label for="userName" className="login-inputLabel">
                User Name:
              </label>
              <input type="text" id="userName" className="login-inputStyle" />
            </div>
            <div className="login-inputLabelContainer">
              <label for="password" className="login-inputLabel">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="login-inputStyle"
              />
            </div>
          </div>
          <div>
            <Link to="/basePage/inbox">
              <button className="linkButton">Login</button>
            </Link>
          </div>
          <div className="newUser-container">
            <button className="newUser-button">Forgot Passoword? </button>
            <button className="newUser-button"> New User? </button>
          </div>
        </form>
      </div>
    </div>
  );
};
