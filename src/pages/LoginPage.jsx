import React, { useState } from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox} from '@mui/material';
import { Paper, Grid, Box, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/airbnb.png";

export default function LoginPage(){
    const navigate = useNavigate();
    const defaultTheme = createTheme();

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

    const handleLogin = (e) => {
        e.preventDefault();

        const logged = JSON.parse(sessionStorage.getItem('user'));
        if(input.username === logged.username && input.password === logged.password) {
            sessionStorage.setItem('loggedIn', true);
            navigate('/');
        } else {
            alert('Something wrong!');
        }
    }

    return(    
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item
                xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?rooms)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <div>
                        <img src={logo} alt='LogoAirbnb' width='75px' height='75px' sx={{ m: 1, bgcolor: 'secondary.main', 'maxWidth': '100%', 'maxHeight': '100%'}} />
                    </div>
                    <Typography component="h1" variant="h5">
                    Log In
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        helperText="Enter your username"
                        autoFocus
                        value={input.username}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText="Enter your password"
                        value={input.password}
                        onChange={handleInput}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button 
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1, backgroundColor: 'black' }}
                    >
                        <FcGoogle style={{marginRight:24}}/>
                        Continue with Google
                    </Button>
                    <Button 
                        fullWidth
                        variant="contained" 
                        sx={{ mt: 1, mb: 1, backgroundColor: 'black' }}
                    >
                        <AiFillGithub style={{marginRight:24}}/>
                        Continue with Github
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#ef405f' }}
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link to={'/signup'} variant="body2">
                            Don't have an account? Sign Up
                        </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
