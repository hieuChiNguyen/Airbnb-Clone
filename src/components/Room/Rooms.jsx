import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    let navigate = useNavigate(); 

    const handleClick = (id) => { 
        let path = `/id=${id}`;
        navigate(path);
    }

    // group-hover:scale-110
    // .group:hover .group-hover\:scale-110 {
    //     --tw-scale-x: 1.1;
    //     --tw-scale-y: 1.1;
    //     transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    // }

    useEffect(() => {
        axios.get('http://localhost:3001/rooms')
        .then(res => setRooms(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div style={{
                margin:'40px', display: 'col'
            }} 
        >
            <div style={{
                    display:'flex', flexDirection:'row', gap:'40px', flexWrap: 'wrap'
                }}
            >
                {rooms && rooms.map((room, index) => (
                        <div key={index}>
                            <img 
                                src={room.image} alt={room.title} width={250} height={250} 
                                style={{
                                    borderRadius:'20px', cursor:'pointer',  boxShadow:'5px 5px 10px #ccc',
                                    
                                }}
                                onClick={() => handleClick(room.id)}
                            />
                            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                                <div style={{fontSize: '20px', lineHeight: '32px', fontWeight: '600', marginBottom:'5px'}}>
                                    {room.title}
                                </div>
                                <div style={{fontSize: '18px', fontWeight: '400', lineHeight: '24px', marginBottom:'5px'}}>
                                    {room.place}
                                    <span style={{marginLeft:'5px', fontStyle:'italic'}}>
                                        {room.price} / night
                                    </span>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}
