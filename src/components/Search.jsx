import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div 
            style={{border:'1px solid #ccc', borderRadius:'24px', alignItems:'center', 
            justifyContent:'space-between', width:'500px', display:'flex',
            flexDirection:'row', cursor:'pointer', maxHeight:'50px', margin:'auto'}} 
        >
            <div style={{marginLeft:'24px'}}>Địa điểm bất kỳ</div>

            <div 
                style={{borderColor:'#ccc', borderStyle:'none solid', borderLeftWidth: '1px', 
                borderRightWidth: '1px', paddingLeft:'24px', paddingRight:'24px'}}
            >
                Tuần bất kỳ
            </div>

            <div style={{display:'flex', flexDirection:'row', gap:'12px', alignItems:'center'}}>
                <div>Thêm khách</div>
                <div style={{padding:'4px', borderRadius:'50%', backgroundColor:'rgb(244 63 94)', margin:'8px',
                color: 'rgb(255 255 255)'}}
                >
                    <BiSearch size={18}/>
                </div>
            </div>

        </div>
    )
}

export default Search;