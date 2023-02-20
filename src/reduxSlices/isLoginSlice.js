import {createSlice} from "@reduxjs/toolkit";


export const isLoginReducer = createSlice({
    name: 'isLogin',
    initialState: {
        value: false,
    },
    reducers: {
        setIsLoginTrue: (state) => {
            state.value = true;
        },
        setIsLoginFalse: (state) => {
            state.value = false;
        },
    },
})


export const {setIsLoginTrue, setIsLoginFalse} = isLoginReducer.actions;


export default isLoginReducer.reducer;

export const selectIsLogin = (state) => state.isLogin.value