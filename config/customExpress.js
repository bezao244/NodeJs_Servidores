//para iniciar o servidor npm start
//configurar o express
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
module.exports = () =>{
    const app = express();
    //recebendo os dados com o post 
    app.use(bodyParser.urlencoded({extended: true}));
    //raw == json
    app.use(bodyParser.json());
    consign()
        .include('controllers')
        .into(app)
    return app
}