//para iniciar o servidor = npm start
const { process_params } = require('express/lib/router');
const Atendimento = require('../models/atendimentos');
module.exports = app => {
//gerenciando a rota de atendimentos
app.get('/atendimentos', function(req, res){
    //listando os atendimentos
    Atendimento.lista(res);
});
app.get('/atendimentos/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    Atendimento.buscaPorId(id, res);
});
app.post('/atendimentos', function(req, res){
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
});

}