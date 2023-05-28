import { AiOutlineMenu } from 'react-icons/ai';
import Search from './Search';

export default function Navbar() {
    return (
        <div style={{height:'80px', border:'1px #ccc', borderStyle:'solid none', width:'100%', display:'flex', position:'fixed'}}>

            <div style={{margin:'auto 20px'}}>
                <img src="logo.png" alt="logo" height='50px' width='100px' />
            </div>

            <Search />

            <div style={{alignItems:'center', margin:'auto 100px 0px', fontSize:'18px'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'12px'}}>
                    <div style={{alignItems:'center', cursor:'pointer', lineHeight:'20px',
                        transition:'all', hover:{backgroundColor:'rgb(245 245 245)'}}}
                    >
                        Cho thuê chỗ ở qua Airbnb
                    </div>
                    <div style={{cursor:'pointer', transition:'all'}}>
                        <AiOutlineMenu />
                    </div>
                    <div style={{cursor:'pointer'}}>
                        <img src="avatar.jpg" alt="avatar" height='40px' width='40px' style={{borderRadius:'100%', paddingBottom:'4px'}} />
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}

