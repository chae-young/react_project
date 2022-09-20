import { readDB, writeDB } from "../dbController.js"
import {v4} from "uuid"

const getMsgs = () => readDB('messages')
const setMsgs = (data) => writeDB('messages',data);

const messgesRoute = [
    {
        method:"get",
        route:"/messages",
        handler:({query: {cursor = ''}},res) => {
            const msgs = getMsgs()
            //id가 빈값이면 index가 -1이기때문에 +1 하면 0 
            //20를 불러오면 마지막 id값이 19이기 때문에 다음 20개부터 불러옴..
            console.log(cursor)
            const fromIndex = msgs.findIndex(msg => msg.id === cursor) +1
            res.send(msgs.slice(fromIndex,fromIndex + 20))//15개 씩 불러오기
        }
    },
    {
        method:'get',
        route:'/messages/:id',
        handler:({params: {id}}, res) => {
            try{
                const msgs = getMsgs()
                const msg = msgs.find(m => m.id === id)
                if(!msg) throw Error('not found')
                res.send(msg)
            }catch(err){
                res.status(404).send({error:err})
            }
        }
    },
    {
        method:"post",
        route:"/messages",
        handler:({body},res) => {
            //body,params,query
            const msgs = getMsgs()
            const newMsg = {
                id:v4(),
                text:body.text,
                userId:body.userId,
                timestamp:Date.now()
            }        
            msgs.unshift(newMsg)
            setMsgs(msgs)
            res.send(newMsg)
        }
    }, 
    {
        method:"put",
        route:"/messages/:id",
        handler:({body, params:{id}},res) => {
            try{
                const msgs = getMsgs()      
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if(targetIndex < 0) throw '메세지가 없습니다'
                if(msgs[targetIndex].userId !== body.userId) throw '사용자가 다릅니다'

                const newMsg = {...msgs[targetIndex],text:body.text}
                msgs.splice(targetIndex,1,newMsg)
                setMsgs(msgs)
                res.send(newMsg)
            }catch(err){
                res.status(500).send(err)
            }
            res.send()
        }
    },
    {
        method:"delete",
        route:"/messages/:id",
        handler:({params:{id}, query:{userId}},res) => {
            console.log(userId)
            try{
                const msgs = getMsgs()      
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if(targetIndex < 0) throw '메세지가 없습니다'
                if(msgs[targetIndex].userId !== userId) throw '사용자가 다릅니다'

                msgs.splice(targetIndex,1)
                setMsgs(msgs)
                res.send(id)
            }catch(err){
                res.status(500).send(err)
            }
            res.send()
        }
    }            
]

export default messgesRoute 