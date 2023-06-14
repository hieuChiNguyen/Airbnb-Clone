import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography, ButtonBase, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Construction from '@mui/icons-material/Construction';
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
    const [uploadedRooms, setUploadedRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/uploadRooms')
        .then(res => setUploadedRooms(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleClick = (id) => { 
        let path = `/id=${id}`;
        navigate(path);
    }

    const handleRemove = (id) => {
        const uploadRoomsData = {
            id: uploadedRooms.id,
            roomId: uploadedRooms.roomId,
            bookingDate: uploadedRooms.bookingDate,
            fromDate: uploadedRooms.fromDate,
            toDate: uploadedRooms.toDate,
            title: uploadedRooms.title,
            image: uploadedRooms.image,
            place: uploadedRooms.place,
            price: uploadedRooms.price
        };

        axios.delete(`http://localhost:3001/uploadRooms/${id}`, uploadRoomsData)
        .then((res) => {
            
            console.log('Room removed successfully');
        })
        .catch((err) => {
            console.log(err);
        }) 
    };

    const handleUpdate = (id) => {
        
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
                Room Rent
            </h2>
            
            <div 
                style={{
                    display:'flex', flexDirection:'column', float:'left', 
                    position:'relative', marginTop:'160px', marginLeft:'40px',
                }}
            >
                {uploadedRooms.length > 0 && uploadedRooms.map((uploadRoom, index) => (
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
                                <ButtonBase sx={{ width: 200, height: 200 }}>
                                    <Img alt={uploadRoom} src={uploadRoom.image} onClick={() => handleClick(uploadRoom.roomId)}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {uploadRoom.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Upload date: {uploadRoom.uploadDate} 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {uploadRoom.place}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid item sx={{display:'flex', flexDirection:'row', marginBottom:2}}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{backgroundColor: '#ef405f'}}
                                                onClick={() => handleUpdate(uploadRoom.id)}
                                            >
                                                <Construction sx={{marginRight:'8px'}} />
                                                Update                                      
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{backgroundColor: '#ef405f'}}
                                                onClick={() => handleRemove(uploadRoom.id)}
                                            >
                                                <DeleteIcon sx={{marginRight:'8px'}} />
                                                Remove                                      
                                            </Button>
                                        </Grid>                 
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {uploadRoom.price}
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
