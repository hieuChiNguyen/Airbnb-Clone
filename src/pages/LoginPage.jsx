import React from "react";
import {Link } from "react-router-dom";
export default function LoginPage(){
    return(
        <div>
            Login Page
            <Link to={'/signup'}>Đăng ký?</Link>
        </div>
    );
}
