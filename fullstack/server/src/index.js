import express from "express"
import cors from "cors"
import messgesRoute from "./routes/messages.js"
import usersRoute from "./routes/users.js"

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))

// messgesRoute.forEach(({method,route,handler}) => {
//     app[method](route,handler)
// })
const routes = [...messgesRoute,...usersRoute]
routes.forEach(({method,route,handler}) => {
    app[method](route,handler)
})

app.listen(8000, ()=> {
    console.log('server on 8000')
})