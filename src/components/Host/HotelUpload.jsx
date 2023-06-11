import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Paper, Typography, Autocomplete } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { categories } from "../Category/Categories";

export default function HotelUpload() {
    const [room, setRoom] = useState({
        id: "",
        title: "",
        image: "",
        place: "",
        price: "",
        category: "",
    });
    
    const theme = createTheme({
        spacing: 4,
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setRoom({
            ...room,
            [e.target.name]: value
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const roomData = {
            id: room.id,
            title: room.title,
            image: room.image,
            place: room.place,
            price: room.price,
            category: room.category
        };

        axios.post("http://localhost:3001/rooms", roomData)
        .then((res) => {
            console.log(res.status, res.data.token);
        });
    
        // Reset form fields
        e.target.reset();
    };

    return (
        <div 
            style={{
                position:'relative', float:'right', right:20, width:'40%', 
                boxShadow:'5px 5px 5px 5px #ccc', margin:'120px auto'
            }}
        >
            <Paper sx={{margin: theme.spacing(2), padding: theme.spacing(3)}} >
                <Typography variant="h5" component="h3">
                Hotel Upload
                </Typography>
                <Typography component="p">You can upload your home and rent it</Typography>

                <form onSubmit={handleUpload} autoComplete='off'>
                <TextField
                    label="Hotel Name"
                    id="margin-normal"
                    name="title"
                    defaultValue={room.title}
                    sx={{margin: theme.spacing(2), width: 400}}
                    autoComplete='off'
                    helperText="Enter your home name"
                    onChange={handleChange}
                />
                <TextField
                    label="Image"
                    id="margin-normal"
                    name="image"
                    defaultValue={room.image}
                    sx={{margin: theme.spacing(2), width: 400}}
                    autoComplete='off'
                    helperText="Enter your home's image address"
                    onChange={handleChange}
                />
                <TextField
                    label="Place"
                    id="margin-normal"
                    name="place"
                    defaultValue={room.place}
                    sx={{margin: theme.spacing(2), width: 400}}
                    autoComplete='off'
                    helperText="Enter your country"
                    onChange={handleChange}
                />
                <TextField
                    label="Price"
                    id="margin-normal"
                    name="price"
                    defaultValue={room.price}
                    sx={{margin: theme.spacing(2), width: 400}}
                    autoComplete='off'
                    helperText="Enter your home's price"
                    onChange={handleChange}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={categories}
                    sx={{margin: theme.spacing(2), width: 400}}
                    helperText="Enter your home's price"
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{margin: theme.spacing(6,2), backgroundColor: '#ef405f', display:'flex'}}
                >
                    Upload 
                    <SendIcon sx={{marginLeft: theme.spacing(3)}} />
                </Button>
                </form>
            </Paper>
        </div>
    );
};
