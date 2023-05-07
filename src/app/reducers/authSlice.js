import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        username:'',
    },
    reducers:  {
        login: (state,action) => {
            state.loggedIn=true;
            state.username= action.payload.username;
        },
        logout:(state)=>{
            state.loggedIn = false;
            state.username = '';
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;
