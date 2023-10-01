import { createSlice } from "@reduxjs/toolkit";

export const contextSlice = createSlice({
    name: 'context',
    initialState: {
        isLogin: false,
        isFirstUse: true,
    },
    reducers: {
        toggleIsLogin: (state)=>{
            state.isLogin = !state.isLogin;
        },
        toggleIsFirstUse: (state)=>{
            state.isFirstUse = !state.isFirstUse;
        }
    }
})

export const { toggleIsLogin, toggleIsFirstUse } = contextSlice.actions;
export default contextSlice.reducer;