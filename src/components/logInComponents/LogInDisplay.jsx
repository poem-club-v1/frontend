import { useState } from "react";
import "./LogInDisplay.css";
import LogInForm from "./logInForm/LogInForm";
import LogInTitle from "./loginTitle/LoginTitle";

function LogInDisplay() {
  return (
    <>
      <div
        className="login-part
  "
      >
        <div className="login-title">
          <LogInTitle />
        </div>
        <div className="login-form">
          <LogInForm />
        </div>
      </div>
    </>
  );
}

export default LogInDisplay;
