//node server/server.js
//nodemon server/server

const express = require('express');
const app = express();
const port = 8080;

const User = require('../models/User');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Nodejs funcionando perfeitamente!!!! aaaa');
});

app.get('/cadastrar', async (req, res) => {
    //console.log("Req: ", req.body);
    
    await User.create({ name: "Ana1", email: "ana1@email.com" })
    .then(() => {
        return res.json({
            erro: false,
            menssagem: "Usuário cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            menssagem: "Erro: Usuário não cadastrado com sucesso"
        })
    });

    //res.send('Nodejs cadastrar no banco');
});

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}!`));