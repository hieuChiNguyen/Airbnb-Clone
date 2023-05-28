import React from "react";
import {Link } from "react-router-dom";
import authApi from "../api/authApi";
import { useSelector,useDispatch } from "react-redux";
import {login, logout} from "../app/reducers/authSlice";

export default function LoginPage(){
    const username = useSelector((state) => state.auth.username);
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();
    const user = {
        id:3,
        username: 'hiehtran1803',
        password: 'tran',
    };
    const handleLogin = async () => {
        const res = await authApi.login(user);
        if(res.token != null){
            sessionStorage.setItem("token",res.token);
            dispatch(login(user));
        }else {
            console.log("login failed");
        }
    };
    return(
        <div>
            Login Page
            <p>username: {username}</p>
            <p>{loggedIn ? "true":"false"}</p>
            <button
                onClick={handleLogin}
            >Đăng nhập</button>
            <Link to={'/signup'}>Đăng ký?</Link>
        </div>
    );
}
