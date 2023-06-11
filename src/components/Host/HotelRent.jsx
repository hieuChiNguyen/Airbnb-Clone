import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography, ButtonBase, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import axios from "axios";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function HotelRent() {
    const navigate = useNavigate();
    const [bookedRooms, setBookedRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/bookedRooms')
        .then(res => setBookedRooms(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleClick = (id) => { 
        let path = `/id=${id}`;
        navigate(path);
    }

    const handleRemove = (id) => {
        const bookedRoomData = {
            id: bookedRooms.id,
            roomId: bookedRooms.roomId,
            bookingDate: bookedRooms.bookingDate,
            fromDate: bookedRooms.fromDate,
            toDate: bookedRooms.toDate,
            title: bookedRooms.title,
            image: bookedRooms.image,
            place: bookedRooms.place,
            price: bookedRooms.price
        };

        axios.delete(`http://localhost:3001/bookedRooms/${id}`, bookedRoomData)
        .then((res) => {
            console.log('Room removed successfully');
        })
        .catch((err) => {
            console.log(err);
        }) 
    };

    return (
        <>
            <h2 
                style={{
                    width:'600px', float:'left', position:'absolute', 
                    left:'40px', marginTop:'120px', fontWeight:'normal',
                    borderBottomStyle:'solid'
                }}
            >
                Hotel Rent
            </h2>
            
            <div 
                style={{
                    display:'flex', flexDirection:'column', float:'left', 
                    position:'relative', marginTop:'160px', marginLeft:'40px',
                }}
            >
                {bookedRooms.length > 0 && bookedRooms.map((bookedRoom, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 2,
                            marginBottom: '40px',
                            width: 600,
                            flexGrow: 1,
                            float: 'left',
                            boxShadow: '5px 5px 10px #ccc',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 160, height: 160 }}>
                                    <Img alt={bookedRoom} src={bookedRoom.image} onClick={() => handleClick(bookedRoom.roomId)}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {bookedRoom.title}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Booking date: {bookedRoom.bookingDate} 
                                    </Typography>
                                    <Typography variant="body2" gutterBottom sx={{fontStyle: "italic"}}>
                                        From: {bookedRoom.fromDate} To: {bookedRoom.toDate}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {bookedRoom.place}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{backgroundColor: '#ef405f', display:'flex'}}
                                        onClick={() => handleRemove(bookedRoom.id)}
                                    >
                                        <DeleteIcon sx={{marginRight:'8px'}} />
                                        Remove                                      
                                    </Button>
                                </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {bookedRoom.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </>
    )

}
