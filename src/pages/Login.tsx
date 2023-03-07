import React from "react";
import { auth, provider } from "../config/firebase";

function Login() {
  return (
    <div className="container">
      <p>Sign in with Google to continue</p>
      <button>Sign in with Google</button>
    </div>
  );
}

export default Login;
