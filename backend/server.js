import express from 'express';
import dotenv from 'dotenv';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

const port = process.env.PORT || 8080;

import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
      credentials: true,
    })
  );

app.use(cookieParser());

app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('Server ready'))
  
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))