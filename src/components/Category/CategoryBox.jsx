import React, { useState } from "react";
import "./CategoryBox.css"

export default function CategoryBox({
    icon: Icon,
    label,
}) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleClick = () => {
        setSelectedCategory(label);
    }

    return (
        <div 
            style={{
                display:'flex', flexDirection:'column', gap:'8px', alignItems:'center',
                justifyContent:'center', padding:'12px', cursor:'pointer', transition:'all'
            }}
            className={`categories ${label === selectedCategory && "selected-box"}`}
            onClick={handleClick}
        >
            <Icon size={28} />
            <div style={{fontSize:'14px'}}>
                {label}
            </div>
        </div>
    )
}
