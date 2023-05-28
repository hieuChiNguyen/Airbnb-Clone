import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";

export default function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('loggedIn')
        navigate("/login");
    }

    return(
        <>
            <Navbar />
            <Categories />
            <Link to={'/login'}>Đăng nhập</Link>
            {/* <Button onClick={handleLogout} sx={{margin:3, borderRadius:2, width: {lg: 100} }} variant='contained' color='info'>Log out</Button> */}
        </>  
    )
}

