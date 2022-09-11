import express from 'express';
import connection from './config/database.js';
import cursoRouter from './routes/curso.js'

connection
  .then(() => console.log('MongoDB connection established'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json())
app.use('/', cursoRouter)

app.get('/ping', (req, res) => {
  res.status(200)
  res.send({'response': 'pong'});
})

export default app;