//para iniciar o servidor npm start
//subir o servidor no ar
const customExpress = require('./config/customExpress');

const app = customExpress();
//escutando a porta 3000 que rodara nosso progama
app.listen(3000, function(){
    console.log("servidor rodando na porta 3000")
});
