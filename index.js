//para iniciar o servidor npm start
//subir o servidor no ar
const customExpress = require('./config/customExpress');
const Tabelas = require('./infraestrutura/tabelas');
const conexao = require('./infraestrutura/conexao');
conexao.connect(erro=>{
    if(erro){
        console.log(erro);
    }else{
        console.log("Conexao mysql funcionando!");
        Tabelas.init(conexao);
        const app = customExpress();
        //escutando a porta 3000 que rodara nosso progama
        app.listen(3000, function(){
        console.log("servidor rodando na porta 3000")
        });
    }
});
