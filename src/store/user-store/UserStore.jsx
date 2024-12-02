import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const userStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const getRootState = () => userStore.getState();
export default userStore;
