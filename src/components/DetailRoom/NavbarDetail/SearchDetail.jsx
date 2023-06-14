import React from "react";
import { BiSearch } from 'react-icons/bi';

export default function DetailRoom() {
    return(
        <div 
            style={{
                border:'1px solid #ccc', borderRadius:'24px', alignItems:'center', 
                justifyContent:'space-between', width:'300px', display:'flex',
                flexDirection:'row', height:'48px', margin:'auto', 
                fontSize:'14px', fontWeight:'bolder'                
            }} 
        >
            <div style={{marginLeft:'40px', cursor:'pointer'}}>
                Start your search
            </div>

            <div style={{display:'flex', flexDirection:'row', gap:'12px', alignItems:'center'}}>
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

