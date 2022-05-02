import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', userRoutes)

app.listen(8080, () => {
  console.log("server is running on 8080");
})