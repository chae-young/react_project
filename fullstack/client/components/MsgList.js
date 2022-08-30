import { useEffect, useState } from "react"
import MsgInput from "./MsgInput"
import MsgItem from "./MsgItem"
import fetcher from "../fetcher"
import {useRouter} from 'next/router'

const UserIds = ['채영',"수지","나은"]
const getRandomUserId = () => UserIds[Math.round(Math.random())]

// const msgs = Array(5).fill(0).map((_, i) => ({
//     id: i + 1,
//     userId: getRandomUserId(),
//     timestamp: 1234567891 + i * 1000 * 60,
//     text: `${i + 1} text`
// }))
// console.log(JSON.stringify(msgs))

// [
//     {
//         id:1,
//         userId: getRandomUserId(),
//         timestamp: 1234567891,
//         text:'1 text'
//     }
// ]

const MsgList = () => {
    const {query:{userId = ''}} = useRouter()
    const [originalMsgArr,originalSetMsgArr] = useState() 
    const [editingId,setEditingId] = useState(null)

    const getMessages = async() => {
        const msgs = await fetcher('get','/messages')
        originalSetMsgArr(msgs)
    }

    useEffect(()=>{
        getMessages()
    },[])

    const onCreate = async text => {
        //useId는 쿼리로 뽑아오기

        const newMsg = await fetcher('post','/messages',{text,userId})
        if(!newMsg) return
        // const newMsg = {
        //     id: originalMsgArr.length + 1,
        //     userId: getRandomUserId(),
        //     timestamp: Date.now(),
        //     text: `${originalMsgArr.length + 1} text`
        // }
        originalSetMsgArr(msg => [newMsg,...msg])
    }

    const onUpdate = async (text,id) => {
        const newMsg = await fetcher('put',`/messages/${id}`,{text,userId})
        if(!newMsg) return

        originalSetMsgArr(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)// 기존 msg로 데이터 가져와서 안정적..?
            if(targetIndex < 0) return msgs
            const newMsgs = [...msgs]
            //새로운 값 추가
            newMsgs.splice(targetIndex,1,newMsg)

            return newMsgs
        })
        doneEdit()
    }

    const doneEdit = () => setEditingId(null)

    const onDelete = async (id) => {
        //params로 보내 주지만 서버에서는 쿼리로 받는다.
        const receviedId = await fetcher('delete',`/messages/${id}`, {params:{userId}})
        const deletMsg = originalMsgArr.filter((msg,i) => msg.id !== receviedId)
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
                    myId={userId}
                />
            )}
        </ul>    
    </>
    )
}

export default MsgList