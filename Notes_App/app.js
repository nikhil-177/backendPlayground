import express from 'express';
import router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(router);

app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Notes App' });
});

export default app;