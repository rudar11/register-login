import express from 'express'
import connectdb from "./db/db.js"

import cookieParser from 'cookie-parser'
const taskRoutes = require('./routes/auth.routes.js');

connectdb()


const app = express()
app.use(cors());
app.use(express.json())
app.use(cookieParser())


// API Routes
app.use('/api/tasks', taskRoutes);





export default app
