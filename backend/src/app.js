import express from 'express';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import connectdb from "./db/db.js";


import taskRoutes from './routes/auth.routes.js'; 

connectdb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/tasks', taskRoutes);

export default app;