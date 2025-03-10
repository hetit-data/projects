import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (userId.trim() !== "" && password.trim() !== "") {
      dispatch(signup({ userId, password }));
      alert("Signup successful! Please login.");
      navigate("/login");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="container text-center">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
