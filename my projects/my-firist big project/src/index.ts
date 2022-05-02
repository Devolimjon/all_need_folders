import express from "express"
import  cors  from "cors"
import usersRoutes from "./routes/users.routes"
const app = express() 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',usersRoutes)
app.listen(9090,()=>{
    console.log('Server is has been started on port 9090...')
})