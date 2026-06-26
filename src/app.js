import express from 'express'
import connectdb from "./db/db.js"
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

connectdb()


const app = express()
app.use(express.json())
app.use(cookieParser())


app.use('/api' ,authRoutes)


export default app
