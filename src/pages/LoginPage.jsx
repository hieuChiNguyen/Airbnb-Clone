import React from "react";
import {Link } from "react-router-dom";
import authApi from "../api/authApi";

export default function LoginPage(){
    return(
        <div>
            Login Page
            <button
                onClick={async ()=>{
                    const user = {
                        id:3,
                        username: 'hie',
                        password: 'tran',
                    };
                    const res = await authApi.login(user);
                }}
            >Đăng nhập</button>
            <Link to={'/signup'}>Đăng ký?</Link>
        </div>
    );
}
