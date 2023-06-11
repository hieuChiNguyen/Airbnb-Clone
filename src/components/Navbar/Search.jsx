import React from "react";
import { BiSearch } from 'react-icons/bi';

export default function Search() {
    return (
        <div 
            style={{
                border:'1px solid #ccc', borderRadius:'24px', 
                alignItems:'center', justifyContent:'space-between', 
                width:'500px', display:'flex',
                flexDirection:'row', height:'48px', 
                margin:'auto', fontSize:'14px',                
            }} 
        >
            <div style={{marginLeft:'40px', cursor:'pointer'}}>
                Anywhere
            </div>

            <div 
                style={{
                    borderColor:'#ccc', borderStyle:'none solid', 
                    borderLeftWidth:'1px', borderRightWidth:'1px', 
                    paddingLeft:'40px', paddingRight:'40px', cursor:'pointer'
                }}
            >
                Any week
            </div>

            <div style={{display:'flex', flexDirection:'row', gap:'12px', alignItems:'center'}}>
                <div style={{color:'#ccc', marginRight:'40px', cursor:'text'}}>Add Guests</div>
                <div 
                    style={{
                        width:25, height:25, borderRadius:20, 
                        backgroundColor:'rgb(244 63 94)', 
                        color:'rgb(255 255 255)', padding:'4px',
                        marginRight:10
                    }}
                ><BiSearch style={{marginTop: 4,marginLeft:5, cursor:'pointer'}} size={18}/>
                    
                </div>
            </div>
        </div>
    )
}