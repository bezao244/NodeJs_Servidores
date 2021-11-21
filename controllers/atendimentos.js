module.exports = app => {
//gerenciando a rota de atendimentos
app.get('/atendimentos', function(req, res){
    res.send("voce esta na rota de atendimentos, get");
});
}