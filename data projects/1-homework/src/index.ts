import express  from "express";
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(9090,()=>{
    console.log('server has been started on port 9090...')
})