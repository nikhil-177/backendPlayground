import express from 'express';
import router from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.use('/', router);

export default app;