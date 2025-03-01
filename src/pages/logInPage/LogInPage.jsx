import { useState } from "react";
import "./LogInPage.css";
import LogInDisplay from "../../components/logInComponents/LogInDisplay";

function LogInPage() {
  return (
    <div className="main-login">
      <LogInDisplay />
    </div>
  );
}

export default LogInPage;
