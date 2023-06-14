import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { Typography } from '@mui/material';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} marginRight={3}>
        {'Copyright © '}
        <Link to={'https://www.airbnb.com/'}>
            Official Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default function DetailRoom() {
    return(
        <div 
            style={{
                position:'fixed', bottom:0, borderTop:'1px solid #ccc',
                height:'40px', width:'100%', padding:'8px', 
                backgroundColor:'#fff'
            }}
        >
            <div 
                style={{
                    display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'
                }}
            >
                <Copyright />
                <div className="contact">
                    <Link to={''} style={{marginRight:24}}>
                        <MdEmail size={32}/>
                    </Link>
                </div>
                
                <Link to={''} style={{marginRight:24}} className="contact">
                    <BsFacebook size={32}/>
                </Link>
                <Link to={''} style={{marginRight:24}} className="contact">
                    <AiFillGithub size={32}/>
                </Link>
            </div>
        </div>
    )
}

