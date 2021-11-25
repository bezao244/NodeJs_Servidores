//para iniciar o servidor npm start
module.exports = app => {
//gerenciando a rota de atendimentos
app.get('/atendimentos', function(req, res){
    res.send("voce esta na rota de atendimentos, get");
});
app.post('/atendimentos', function(req, res){
    //mostrando a requisicao
    console.log(req.body);
    res.send("voce esta na rota de atendimentos, post");
});

}