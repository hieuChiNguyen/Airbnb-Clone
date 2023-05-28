import React, { useState } from "react";
import {Box, Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: "",
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value, 
        })
    }
    
    // Store value in sessionStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('user', JSON.stringify(input));
        navigate("/login")
    }

    return(
        <>
            <div>Sign Up</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Box display='flex' flexDirection='column' margin='50px auto' boxShadow='5px 5px 10px #ccc' padding='30px'
                        width='500px' border='1px solid #ccc' borderRadius='20px' justifyContent='center' alignItems='center'
                        sx={{':hover': {boxShadow: '10px 10px 20px #ccc'}, 'width': {sm: 300, md: 400, lg: 500}}}>
                        <div>
                            <img src='airbnb.png' alt='LogoAirbnb' width='75px' height='75px' sx={{'maxWidth': '100%', 'maxHeight': '100%'}} />
                        </div>
                        <TextField margin='normal' type='text' variant='outlined' label='Username' sx={{width: {sm: 300, md: 400}}}
                        name='username' value={input.username} onChange={handleInput} />
                        <TextField margin='normal' type='password' variant='outlined' label='Password' sx={{width: {sm: 300, md: 400}}}
                        name='password' value={input.password} onChange={handleInput} />
                        <Button type='submit' sx={{margin:3, borderRadius:2, width: {xs: 200, sm: 300, lg: 150} }} variant='contained' color='info'>Đăng ký</Button>
                    </Box>
                </form>            
            </div>
        </>
    )
}
