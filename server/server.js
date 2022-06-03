//node server/server.js
//nodemon server/server

const express = require('express');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
    res.send('Nodejs funcionando perfeitamente!!!!');
});

app.post('/cadastrar', async (req, res) => {
    res.send('Nodejs cadastrar no banco');
});

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}!`));