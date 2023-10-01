import { createSlice } from "@reduxjs/toolkit";

export const contextSlice = createSlice({
    name: 'context',
    initialState: {
        isLogin: false,
        isLoading: false,
        isFirstUse: true,
    },
    reducers: {
        toggleIsLogin: (state)=>{
            state.isLogin = !state.isLogin;
        },
        toggleIsLoading: (state)=>{
            state.isLoading = !state.isLoading;
        },
        toggleIsFirstUse: (state)=>{
            state.isFirstUse = !state.isFirstUse;
        }
    }
})

export const { toggleIsLogin, toggleIsLoading, toggleIsFirstUse } = contextSlice.actions;
export default contextSlice.reducer;