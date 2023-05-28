export default function CategoryBox({
    icon: Icon,
    label
}) {
    return (
        <div 
            style={{display:'flex', flexDirection: 'column', gap:'8px', alignItems:'center',
            justifyContent:'center', padding:'12px', cursor:'pointer', transition:'all'}}
        >
            <Icon size={30}/>
            <div style={{fontSize:'15px', fontWeight:'normal'}}>
                {label}
            </div>
        </div>
    )
}