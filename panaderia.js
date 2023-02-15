const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

//funcion para recibir los datos del sql y si hay error se retorna el error
funconect = (sql, res, con) => {
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
};

//funcion para recibir los datos del sql y los parametros que se modifican
funconectParams = (sql, res, con, parametros) => {
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
};

//para los get o seleccion de las tablas
app.get('/acaceres/api/:tabla/', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'desfhyeb_acaceres',
        password: 'Hola12345$',
        database: 'desfhyeb_acaceres'

    });
    //se concatena el req.params y la tabla es la que viene por la url
    let sql;
    //switch para ordenar las peticiones por su id
    switch (req.params.tabla) {
        case "tbl_cliente":
            sql = "SELECT * FROM " + req.params.tabla + " order by id_cliente asc ";
            break;

        case "tbl_pedidos":
            sql = "select * from " + req.params.tabla + " order by id_pedido asc ";
            break;

        case "tbl_envios":
            sql = "SELECT * FROM " + req.params.tabla + " order by id_envios asc ";
            break;

        case "tbl_panes":
            sql = "select * from " + req.params.tabla + " order by id_pan asc ";
            break;
        case "tbl_empacador":
            sql = "SELECT * FROM " + req.params.tabla + " order by id_empacador asc ";
            break;

        case "tbl_panadero":
            sql = "select * from " + req.params.tabla + " order by id_panadero asc ";
            break;

        case "tbl_delivery":
            sql = "select * from " + req.params.tabla + " order by id_delivery asc ";
            break;
    
        default:
            break;
    }

    funconect(sql, res, con);
})
//para seleccionar las tablas  por id
app.get('/acaceres/api/:tabla/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'desfhyeb_acaceres',
        password: 'Hola12345$',
        database: 'desfhyeb_acaceres'

    });
    //parte de sql para seleccionar la tabla que se ocupa
    let sql;

    switch (req.params.tabla) {
        case "tbl_cliente":
            sql = "SELECT * FROM " + req.params.tabla + " where id_cliente = " + req.params.id;
            break;

        case "tbl_pedidos":
            sql = "select * from " + req.params.tabla + " where id_pedido = " + req.params.id;
            break;

        case "tbl_envios":
            sql = "SELECT * FROM " + req.params.tabla + " where id_envios = " + req.params.id;
            break;

        case "tbl_panes":
            sql = "select * from " + req.params.tabla + " where id_pan = " + req.params.id;
            break;
        case "tbl_empacador":
            sql = "SELECT * FROM " + req.params.tabla + " where id_empacador = " + req.params.id;
            break;

        case "tbl_panadero":
            sql = "select * from " + req.params.tabla + " where id_panadero = " + req.params.id;
            break;

        case "tbl_delivery":
            sql = "select * from " + req.params.tabla + " where id_delivery = " + req.params.id;
            break;

        default:
            break;
    }

    //para mandar los parametros si es erroneo retornar erro
    funconect(sql, res, con, );
});
//para insertar para las tablas
app.post('/acaceres/api/:tabla/', (req, res) => {
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'desfhyeb_acaceres',
        password: 'Hola12345$',
        database: 'desfhyeb_acaceres'

    });
    let sql;
    let parametros;
//switch para ingresar los datos mas los parametros a las tablas
    switch (req.params.tabla) {
        case "tbl_cliente":
            sql = "insert into " + req.params.tabla + " (dni, nombre_cliente, direccion) " +
                "values (?,?,?)";
            parametros = [req.body.dni, req.body.nombre_cliente, req.body.direccion, ];

            break;

        case "tbl_pedidos":
            sql = "insert into " + req.params.tabla + " (id_cliente, id_panadero, id_pan, id_empacador, fecha_pedido) " +
                "values (?,?,?,?,?)";
            parametros = [req.body.id_cliente, req.body.id_panadero, req.body.id_pan ,req.body.id_empacador, req.body.fecha_pedido];

            break;

        case "tbl_envios":
            sql = "insert into " + req.params.tabla + " (id_pedido, id_delivery) " +
                "values (?,?)";
            parametros = [req.body.id_pedido, req.body.id_delivery];
            break;

        case "tbl_panes":
            sql = "insert into " + req.params.tabla + " (tipo_pan) " +
                "values (?)";
            parametros = [req.body.tipo_pan];
            break;

        case "tbl_empacador":
            sql = "insert into " + req.params.tabla + " (nombre, dni_empacador, edad_empacador) " +
                "values (?, ?, ?)";
            parametros = [req.body.nombre, req.body.dni_empacador, req.body.edad_empacador];
            break;

        case "tbl_panadero":
            sql = "insert into " + req.params.tabla + " (nombre_panadero, dni_panadero) " +
                "values (?, ?)";
            parametros = [req.body.nombre_panadero, req.body.dni_panadero, ];
            break;

        case "tbl_delivery":
            sql = "insert into " + req.params.tabla + " (nombre_transportista, dni_transportista) " +
                "values (?, ?)";
            parametros = [req.body.nombre_transportista, req.body.dni_transportista, ];
            break;

        default:
            break;
    }
    //se envian los datos y si da erro se muestra en 
    funconectParams(sql, res, con, parametros);

});
//para actualizar clientes
app.put('/acaceres/api/:tabla/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'desfhyeb_acaceres',
        password: 'Hola12345$',
        database: 'desfhyeb_acaceres'

    });
    let sql;
    let parametros;
    //para actualizar la tabla y se manda a llamar el id 
    switch (req.params.tabla) {
        case "tbl_pedidos":
            sql = "update " + req.params.tabla + " set id_cliente = ?, id_panadero = ?, id_pan = ?, id_empacador = ?, fecha_pedido = ? where id_pedido = ? ";
            parametros = [req.body.id_cliente, req.body.id_panadero, req.body.id_pan, req.body.id_empacador, req.body.fecha_pedido, req.params.id];
            break;

        case "tbl_envios":
            sql = "update " + req.params.tabla + " set id_pedido = ?, id_delivery = ? where id_envios = ? ";
            parametros = [req.body.id_pedido, req.body.id_delivery, req.params.id];
            break;

        case "tbl_cliente":
            sql = "update " + req.params.tabla + " set dni = ?, nombre_cliente = ?, direccion = ? where id_cliente = ? ";
            parametros = [req.body.dni, req.body.nombre_cliente, req.body.direccion, req.params.id];
            break;

        case "tbl_panes":
            sql = "update " + req.params.tabla + " set tipo_pan = ? where id_cliente = ? ";
            parametros = [req.body.tipo_pan, req.params.id];
            break;

        case "tbl_empacador":
            sql = "update " + req.params.tabla + " set nombre = ?, dni_empacador = ?, edad_empacador where id_empacador = ? ";
            parametros = [req.body.nombre, req.body.dni_empacador, req.body.edad_empacador, req.params.id];
            break;

        case "tbl_panadero":
            sql = "update " + req.params.tabla + " set nombre_panadero = ?, dni_panadero = ?, where id_panadero = ? ";
            parametros = [req.body.nombre_panadero, req.body.dni_panadero, req.params.id];
            break;

        case "tbl_delivery":
            sql = "update " + req.params.tabla + " set nombre_transportista = ?, dni_transportista = ?, where id_delivery = ? ";
            parametros = [req.body.nombre_transportista, req.body.dni_transportista, req.params.id];
            break;

        default:
            break;
    }
    //mandar parametros de sql seguido de el res, el con de coneccion y los  de la variable parametros
    funconectParams(sql, res, con, parametros);
});
//para eliminar un dato de una tabla
app.delete('/acaceres/api/:tabla/:id', (req, res) => {

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'desfhyeb_acaceres',
        password: 'Hola12345$',
        database: 'desfhyeb_acaceres'

    });
    let sql;
    //se llama la tabla y luego se elimina el id de la tabla
    switch (req.params.tabla) {
        case "tbl_cliente":
            sql = "delete from " + req.params.tabla + " where id_cliente = " + req.params.id;

            break;

        case "tbl_pedidos":
            sql = "delete from " + req.params.tabla + " where id_pedido = " + req.params.id;
            break;

        case "tbl_envios":
            sql = "delete from " + req.params.tabla + " where id_envios = " + req.params.id;
            break;

        case "tbl_panes":
            sql = "delete from " + req.params.tabla + " where id_pan = " + req.params.id;
            break;

        case "tbl_empacador":
            sql = "delete from " + req.params.tabla + " where id_empacador = " + req.params.id;
            break;

        case "tbl_panadero":
            sql = "delete from " + req.params.tabla + " where id_panadero = " + req.params.id;
            break;

        case "tbl_delivery":
            sql = "delete from " + req.params.tabla + " where id_delivery = " + req.params.id;
            break;

        default:
            break;
    }

    funconect(sql, res, con, );
});

app.listen();