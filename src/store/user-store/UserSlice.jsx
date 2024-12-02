import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    },
  },
});

export const { login } = UserSlice.actions;
export default UserSlice.reducer;
