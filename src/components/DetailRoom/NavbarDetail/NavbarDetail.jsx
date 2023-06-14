import React from "react";
import SearchDetail from "./SearchDetail"
import UserMenu from "../../Navbar/UserMenu";
import logo from "../../../assets/images/logo.png";
import { MdLanguage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NavbarDetail() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    return(
        <div 
            style={{
                height:'80px', width:'100%', display:'flex',top: '0px', 
                background: '#fff', position:'fixed', zIndex:2,
                borderBottom:'1px solid #ccc'
            }}

        >
            <div style={{margin:'auto 20px'}}>
                <img 
                    src={logo} alt="logo" height='40px' width='150px' 
                    style={{cursor:'pointer'}}
                    onClick={() => handleClick('/')}
                />
            </div>

            <SearchDetail />

            <div style={{
                    alignItems:'center', justifyContent:'center', margin:'auto', 
                    display:'flex', flexDirection:'row', rowGap:'5px'
                }}
            >            
                <div 
                    className="airbnb_home"
                    style={{fontSize:'1rem', cursor:'pointer', padding: '10px'}}c
                    onClick={() => handleClick('/hosts')}
                >
                    Airbnb your home
                </div>
                <div 
                    className="language"
                    style={{padding:5,marginLeft:"20px", marginRight:"20px", cursor:'pointer'}}
                >
                    <MdLanguage size={24}/>
                </div>
                <div>
                    <UserMenu />
                </div>
            </div>    
        </div>  
    )
}

