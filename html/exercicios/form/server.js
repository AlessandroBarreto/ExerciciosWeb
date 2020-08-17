const express = require('express')
const app = express()
const bodyParser = require('body-parser') //gravar os dados

app.use(bodyParser.urlencoded({ extended: true})) //padrão 

app.post('/usuarios', (req, resp) => {
    console.log(req.body) //imprimir o que veio no body
    resp.send('<h1>Parabéns. Usuário Incluido"</h1>') //resposta 
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body) //imprimir o que veio no body
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>') //resposta 
})

app.listen(3003)