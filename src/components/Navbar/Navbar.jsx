import React from "react";
import Search from './Search';
import UserMenu from "./UserMenu";

export default function Navbar() {
    return (
        <>
            <div style={{height:'80px', border:'1px #ccc', borderStyle:'solid none', width:'100%', display:'flex'}}>
                <div style={{margin:'auto 20px'}}>
                    <img src="logo.png" alt="logo" height='50px' width='150px' />
                </div>

                <Search />

                <div style={{alignItems:'center', justifyContent:'center', margin:'auto', display:'flex', flexDirection:'row', rowGap:'5px'}}>    
                        
                    <div style={{fontSize:'18px', cursor:'pointer'}}>
                        Airbnb your home
                    </div>
                    <div style={{marginLeft:"30px", marginRight:"30px"}}>
                        <UserMenu />
                    </div>
                    {/* <div style={{cursor:'pointer'}}>
                        <img src="avatar.jpg" alt="avatar" height='40px' width='40px' style={{borderRadius:'100%', paddingBottom:'4px', margin:'auto'}} />
                    </div> */}
                </div>
                
            </div>
        </>
    )
}

