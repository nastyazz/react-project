import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../user-store/UserSlice.jsx'


const userStore = configureStore({
    reducer: {
        'user': userReducer
    }
})

export default userStore;