const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/user', (req, res) => {
    res.send('Rota para user');
})

app.get('/user/:id', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc/:title', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc/:author', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc/:keyword', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc/:datePublished', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc/:course', (req, res) => {
    res.send('Rota para user');
})

app.get('/tcc', (req, res) => {
    res.send('Titulo: ' + req.query.title + '\n' + 'Autor: ' + req.query.author);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});