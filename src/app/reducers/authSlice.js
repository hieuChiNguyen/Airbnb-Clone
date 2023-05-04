import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        username:'',
        token:'',
    },
    reducers:  {
        login: (state,action) => {
            state.loggedIn=true;
            state.username= action.payload.username;
            state.token= action.payload.token;
        },
        logout:(state)=>{
            state.loggedIn = false;
            state.username = '';
            state.token='';
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;
