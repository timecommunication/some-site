import {configureStore} from "@reduxjs/toolkit";
import isLoginReducer from "./reduxSlices/isLoginSlice";

export default configureStore({
    reducer: {
        isLogin: isLoginReducer,
    },
})