

export const rooms = [
    {
        image:'',
        title:'Hotel 1',
        price:'500$'
    },
    {
        image:'',
        title:'Hotel 2',
        price:'400$'
    }
]

export default function Rooms() {
    return (
        <div style={{display:'flex', flexDirection:'row', gap:'12px'}}>
            {rooms.map((item) => (
                <div key={item.title} label={item.title}>
                    
                </div>
            ))}
        </div>
    )
}