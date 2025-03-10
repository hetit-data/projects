import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ userId, password }));
    if (localStorage.getItem("user")) navigate("/");
  };

  return (
    <div className="container text-center">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>


      <p>Don't have an account? <Link to="/signup">Signup</Link></p>

    </div>
  );
}

export default Login;
