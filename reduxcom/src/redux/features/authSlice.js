import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users)); // Store new user
    },
    login: (state, action) => {
      const { userId, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.userId === userId && u.password === password);

      if (user) {
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user)); // Store session
      } else {
        alert("Invalid credentials!");
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Clear session
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
