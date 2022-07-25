import fs from 'fs'
import {resolve} from 'path'

const basePath = resolve() // 현재경로

const filenames = {
    messages: resolve(basePath, 'src/db/messages.json'),
    users: resolve(basePath, 'src/db/users.json')
}


//읽어오는 컨트롤러
export const readDB = target => {
    try{
        return JSON.parse(fs.readFileSync(filenames[target],'utf-8')) //인코딩
    }catch(err){
        console.error(err)
    }
}

//새로 덮어씌울 데이터까지 지정
export const writeDB = (target,data) => {
    try{
        return fs.writeFileSync(filenames[target],JSON.stringify(data))
    }catch(err){
        console.error(err)
    }
}