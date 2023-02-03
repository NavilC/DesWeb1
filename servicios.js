const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

// CRUD PARA CLIENTES
//para seleccionar los clientes
app.get('/api/cliente/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "select * from tbl_cliente";

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
//para seleccionar los clientes por id
app.get('/api/cliente/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql = "select * from tbl_cliente where id_cliente = ?";
    let parametros = [req.params.id];

    //para mandar los parametros si es erroneo retornar erro
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
//para insertar clientes
app.post('/api/cliente/', (req, res) =>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "insert into tbl_cliente "+
              "(dni, nombre_cliente, direccion)" +
              " values (?,?,?)";

    let parametros = [req.body.dni, 
                     req.body.nombre_cliente,
                     req.body.direccion];

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
//para actualizar clientes
app.put('/api/cliente/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "update tbl_cliente "+ 
                " set dni = ?, "+
                "nombre_cliente = ?, "+
                " direccion = ?"+
                " where id_cliente = ? ";


     let parametros = [req.body.dni,
                       req.body.nombre_cliente,
                       req.body.direccion,
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
//para eliminar un cliente
app.delete('/api/cliente/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "delete from tbl_cliente where id_cliente =?";

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


// CRUD PARA PROCURADORES
//para seleccionar los procuradores
app.get('/api/procuradores/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "select * from tbl_procurador";

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
});  
//para seleccionar los procuradores por id
app.get('/api/procuradores/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql = "select * from tbl_procurador where id_procurador = ?";
    let parametros = [req.params.id];

    //para mandar los parametros si es erroneo retornar error
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
//para insertar procuradores
app.post('/api/procuradores/', (req, res) =>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "insert into tbl_procurador "+
              "(nombre, apellido, dni_procurador)" +
              " values (?,?,?)";

    let parametros = [req.body.nombre, 
                     req.body.apellido,
                     req.body.dni_procurador];

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
//para actualizar procuradores
app.put('/api/procuradores/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "update tbl_procurador "+ 
                " set nombre = ?, "+
                "apellido = ?, "+
                " dni_procurador = ?"+
                " where id_procurador = ? ";


     let parametros = [req.body.nombre,
                       req.body.apellido,
                       req.body.dni_procurador,
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
//para eliminar un procurador
app.delete('/api/procuradores/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "delete from tbl_procurador where id_procurador =?";

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

//CRUD PARA ASUNTOS
//para seleccionar los asuntos
app.get('/api/asuntos/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "select * from tbl_asuntos";

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
});   
//para seleccionar los asuntos por id
app.get('/api/asuntos/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql = "select * from tbl_asuntos where numero_expediente = ?";
    let parametros = [req.params.id];

    //para mandar los parametros si es erroneo retornar error
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
//para insertar asuntos
app.post('/api/asuntos/', (req, res) =>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "insert into tbl_asuntos "+
              "(id_cliente, id_estado, fecha_inicio, fecha_archivo)" +
              " values (?,?,?,?)";

    let parametros = [req.body.id_cliente, 
                     req.body.id_estado,
                     req.body.fecha_inicio,
                     req.body.fecha_archivo];

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
//para actualizar asuntos
app.put('/api/asuntos/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "update tbl_asuntos "+ 
                " set id_cliente = ?, "+
                "id_estado = ?, "+
                " fecha_inicio = ?, "+
                "fecha_archivo = ?, "+
                " where numero_expediente = ? ";


     let parametros = [req.body.id_cliente,
                       req.body.id_estado,
                       req.body.fecha_inicio,
                       req.body.fecha_archivo,
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
//para eliminar un asuntos
app.delete('/api/asuntos/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "delete from tbl_asuntos where numero_expediente =?";

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

//CRUD PARA ESTADOS
//para seleccionar los estados 
app.get('/api/estados/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "select * from tbl_estados";

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
});   
//para seleccionar los estados por id
app.get('/api/estados/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql = "select * from tbl_estados where id_estado = ?";
    let parametros = [req.params.id];

    //para mandar los parametros si es erroneo retornar error
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
//para insertar estados
app.post('/api/estados/', (req, res) =>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "insert into tbl_estados "+
              "(estado_actual)" +
              " values (?)";

    let parametros = [req.body.estado_actual];

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
//para actualizar estados
app.put('/api/estados/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "update tbl_estados "+ 
                " set estado_actual = ?, "+
                " where id_estado = ? ";


     let parametros = [req.body.estado_actual,
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
//para eliminar un estado
app.delete('/api/estados/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "delete from tbl_estados where id_estado =?";

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

//CRUD PARA LA RELACION ENTRE ASUNTOS Y PROCURADORES 
//para seleccionar las relaciones de muchos a muchos
app.get('/api/relaciones/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "select * from tbl_relaciones";

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
});   
//para seleccionar las relaciones por id
app.get('/api/relaciones/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql = "select * from tbl_relaciones where id_relaciones = ?";
    let parametros = [req.params.id];

    //para mandar los parametros si es erroneo retornar error
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
//para insertar relaciones
app.post('/api/relaciones/', (req, res) =>{
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'servicios'
        
    });

    let sql = "insert into tbl_relaciones "+
              "(numero_expediente, id_procurador)" +
              " values (?, ?)";

    let parametros = [req.body.numero_expediente,
                      req.body.id_procurador];

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
//para actualizar las relaciones
app.put('/api/relaciones/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "update tbl_relaciones "+ 
                " set numero_expediente = ?, "+
                "id_procurador = ?, "+
                " where id_relaciones = ? ";


     let parametros = [req.body.numero_expediente,
                       req.body.id_procurador,
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
//para eliminar un relacion
app.delete('/api/relaciones/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'servicios'
    });
    let sql = "delete from tbl_relaciones where id_relaciones = ?";

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