import React from "react";

export default function CategoryBox({
    icon: Icon,
    label,
}) {
    return (
        <div 
            style={{
                display:'flex', flexDirection: 'column', gap:'8px', alignItems:'center',
                justifyContent:'center', padding:'12px', cursor:'pointer', transition:'all',
                // ${selected ? (borderBottomColor = 'rgb(38 38 38)') : (borderColor = 'transparent')}
                // ${selected ? (color = 'rgb(38 38 38)') : (color = 'rgb(115 115 115)')}
            }}
        >
            <Icon size={30}/>
            <div style={{fontSize:'15px'}}>
                {label}
            </div>
        </div>
    )
}
