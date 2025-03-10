import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/redux/features/authSlice";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <nav>
        {user ? (
          <>
            <span>Welcome, {user.userId}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : null}
      </nav>

      <Routes>
        {/* Prevent access to login/signup if logged in */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />

        {/* Redirect to login if not logged in */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
