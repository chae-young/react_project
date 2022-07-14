import { useEffect, useState } from "react"
import MsgItem from "./MsgItem"

const UserIds = ['채영',"수지","나은"]
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const msgs = Array(5).fill(0).map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567891 + i * 1000 * 60,
    text: `${i + 1} text`
}))


// [
//     {
//         id:1,
//         userId: getRandomUserId(),
//         timestamp: 1234567891,
//         text:'1 text'
//     }
// ]

const MsgList = () => {
    const [msgArr,setMsgArr] = useState() 

    useEffect(()=>{
        setMsgArr(msgs)
    },[])

    return(
    <ul className="messages">
        {msgArr?.map(x => <MsgItem key={x.id} {...x}/>)}
    </ul>    
    )
}

export default MsgList