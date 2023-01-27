
var mysql = require('mysql');
var http = require('http');
var url = require('url');


http.createServer( function(req, res){

    res.writeHead(200, {'Content-Type': 'text/json'});
    var q = url.parse(req.url, true);
    var datos = q.query; 

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "registro"
    });

    let sql = "insert into tbl_persona "+
              " ( nombre_persona, apellido_persona, fecha_nacimiento) "+
              " values  "+
              " (?, ?, ?) "; 

    let infoInsertar = [ datos.nombre, datos.apellido, datos.fecha_nacimiento ];


    con.connect( function(err){
        if(err) throw err;
        con.query( sql , infoInsertar , function(err, result){

            if(err) {
                console.log(err);
                res.end();
            }else{
                console.log(result);
                res.end();
            }
        });

    });
}).listen(3030);