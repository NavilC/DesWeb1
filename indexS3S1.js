const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());
// aprender que esto es el select
app.get('/api/telefono/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registro'
        
    });

    let sql = "select * from tbl_telefonos";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }

    });
})
//aprender que esto es el select
app.get('/api/telefono/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registro'
    });

    let sql = "select * from tbl_telefonos where id_telefono = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});
//aprender que esto es el insert
app.post('/api/telefono/', (req, res)=>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'registro'
    });

    let sql = "insert into tbl_telefonos "+
    "( numero, id_persona) "+
    "values (?,?)";

    let parametros = [ 
                    req.body.numero,
                    req.body.id_persona
                    ];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        }else{
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });    
});
//aprender que esot es el update
app.put('/api/telefono/:id', (req, res)=>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'registro'
    });
    let sql = "update tbl_telefonos "+ 
                " set numero = ?, "+
                "id_persona = ? "+
                " where id_telefono = ? ";


     let parametros = [req.body.numero,
                       req.body.id_persona,
                       req.params.id];

     con.connect(function(err){
        if(err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
     })
});
//aprender que esto es el delete
app.delete('/api/telefono/:id', (req, res)=>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'registro'
    });
    let sql = "delete from tbl_telefonos where id_telefono =?";

    let parametros = [req.params.id];
    
    con.connect(function(err){
        if(err){
            res.send(err);
            }else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result);
                    }
                });
            }
        });              
});
app.listen(3000);