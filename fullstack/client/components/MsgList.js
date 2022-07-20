import { useEffect, useState } from "react"
import MsgInput from "./MsgInput"
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
    const [originalMsgArr,originalSetMsgArr] = useState() 
    const [editingId,setEditingId] = useState(null)

    useEffect(()=>{
        originalSetMsgArr(msgs)
    },[])

    const onCreate = text => {
        console.log(text)
        const newMsg = {
            id: originalMsgArr.length + 1,
            userId: getRandomUserId(),
            timestamp: Date.now(),
            text: `${originalMsgArr.length + 1} text`
        }
        originalSetMsgArr(msg => [newMsg,...msg])
    }

    const onUpdate = (text,id) => {
        originalSetMsgArr(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)// 기존 msg로 데이터 가져와서 안정적..?
            if(targetIndex < 0) return msgs
            const newMsgs = [...msgs]
            //새로운 값 추가
            newMsgs.splice(targetIndex,1,{
                ...msgs[targetIndex],
                text
            })

            return newMsgs
        })
        doneEdit()
    }

    const doneEdit = () => setEditingId(null)

    const onDelete = (id) => {
        const deletMsg = originalMsgArr.filter((msg,i) => msg.id !== id)
        originalSetMsgArr(deletMsg)
    } 

    return(
    <>
        <MsgInput mutate={onCreate}/>
        <ul className="messages">
            {originalMsgArr?.map(x => 
                <MsgItem 
                    key={x.id} 
                    {...x} 
                    onUpdate={onUpdate}
                    onDelete={() => onDelete(x.id)}
                    startEdit={() => setEditingId(x.id)}
                    isEditing={editingId === x.id}
                />
            )}
        </ul>    
    </>
    )
}

export default MsgList