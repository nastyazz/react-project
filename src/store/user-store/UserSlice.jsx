import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  password: '',
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.accessToken = action.payload.accessToken;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.id = null;
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.gender = '';
      state.image = '';
      state.isAuthenticated = false;
    }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
