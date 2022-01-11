//parte de conexao
const { query } = require('express');
const { is } = require('express/lib/request');
const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        //as validacoes
            const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
            const clienteEhValido = atendimento.cliente.length >= 5;
            const validacoes = [
                {
                    nome: 'data',
                    valido: dataEhValida,
                    mensagem: 'Data deve ser maior ou igual a data atual'
                },
                {
                    nome: 'cliente',
                    valido: clienteEhValido,
                    mensagem: 'Cliente dever ter pelo menos cinco caracteres'
                }
            ]
        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;
        if(existemErros){
            res.status(400).json(erros);
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro);
                } else {
                   res.status(201).json(atendimento);
                }
            })
        }    
    }
    //criando uma funcao de listar os atendimentos do banco
    lista(res) {
        const sql = 'SELECT * FROM Atendimentos';
        conexao.query(sql,(erro, resultados)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultados);
            }
        });
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
        conexao.query(sql, (erro, resultados) =>{
            const atendimento = resultados[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(atendimento);
            }
        })
    }
    //criando uma funcao para alterar os valores do atendimento
    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro,resultados)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json({...valores,id});
            }
        });
    }
    //criando uma funcao para deletar um atendimento agendado
    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?';
        conexao.query(sql, id, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new Atendimento;