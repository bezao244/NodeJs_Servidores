//para iniciar o servidor = npm start
const { process_params } = require('express/lib/router');
const Atendimento = require('../models/atendimentos');
module.exports = app => {
//DEFININDO OQUE CADA ROTA IRÁ FAZER
app.get('/atendimentos', function(req, res){
    //listando os atendimentos
    Atendimento.lista(res);
});
app.get('/atendimentos/:id', (req, res)=>{
    //convertendo o id
    const id = parseInt(req.params.id);
    Atendimento.buscaPorId(id, res);
});
app.post('/atendimentos', function(req, res){
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
});
app.patch('/atendimentos/:id', (req, res)=>{
    //convertendo o id
    const id = parseInt(req.params.id);
    const valores = req.body;
    Atendimento.altera(id, valores, res);
});
app.delete('/atendimentos/:id', (req, res)=>{
    //convertendo o id
    const id = parseInt(req.params.id);
    Atendimento.deleta(id, res);
});
}