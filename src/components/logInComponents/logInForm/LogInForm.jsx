import { useState } from "react";
import "./LogInForm.css";
import { FcGoogle } from "react-icons/fc";
import loginHoverImage from "../../../images/loginHoverImage.png";

function LogInForm() {
  return (
    <div className="login-form-container">
      <div className="login-form-text-container">
        <h1>Log In</h1>
        <p>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy
        </p>
      </div>
      <div className="login-form-button-container">
        <button
          className="login-google-button"
          style={{
            cursor: `url(${loginHoverImage}), auto`,
          }}
          onclick={`window.location.href="${process.env.REACT_APP_BACKEND_URL}/oauth2/authorization/google"`}
        >
          <div className="login-button-container">
            <FcGoogle size={50} />
            Continue with Google
          </div>
        </button>
      </div>
    </div>
  );
}

export default LogInForm;
