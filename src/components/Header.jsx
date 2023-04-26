import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div style={{
            height:"10%",
            display: 'flex',
            alignContent: 'center',
            borderBottomWidth: '1px',
            borderBottomColor: '#ebebeb',
            borderBottomStyle:"solid",
        }}>
            <div
                style={{
                    marginLeft:'5%',
                }}
            >Logo</div>
            <div
                style={{
                    marginLeft:'40%',
                }}
            >Search</div>
            <Link to={'/login'}
                  style={{
                      marginLeft:'40%',
                  }}
            >Login</Link>
        </div>
    );
}
