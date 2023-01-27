var mysql = require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    var q = url.parse(req.url, true);
    var datos = q.query;

    //esta sera la accion que se usara en la url
    var accion = datos.accion;

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bibliotecas'

    });

    let sql = "";
    let parametros = [];
    let tabla = datos.tabla;

    if (tabla == "libros") {

        switch (accion) {
            case "insert":
                sql = "insert into tbl_registro_libros " +
                    "(nombre_libro, genero_literario, fecha_lanzamineto, nombre_autor )" +
                    "values (?,?,?,?)";
                parametros = [datos.nombre_libro,
                    datos.genero_literario,
                    datos.fecha_lanzamineto,
                    datos.nombre_autor
                ];

                break;

            case "select":
                sql = "select * from tbl_registro_libros";
                break;

            case "update":
                sql = "update tbl_registro_libros " +
                    " set nombre_libro = ?," +
                    "genero_literario = ?, " +
                    " fecha_lanzamineto = ? " +
                    "nombre_autor = ?"+
                    " where id_libro = ? ";

                //mandamos parametros para el update
                parametros = [datos.nombre_libro,
                    datos.genero_literario,
                    datos.fecha_lanzamineto,
                    datos.nombre_autor,
                    datos.id_libro
                ];
                break;

            case "delete":
                sql = "delete from tbl_registro_libros  where id_libro =? ";

                //mandamos parametros para el delete
                parametros = [datos.id_libro];
                break;

            default:
                sql = "";
                break;
        }

    }

    if (tabla == "alumno") {

        switch (accion) {
            case "insert":
                sql = "insert into tbl_alumno " +
                    "(numero_cuenta, nombre, apellido) " +
                    "values (?,?,?)";
                parametros = [datos.numero_cuenta,
                    datos.nombre,
                    datos.apelido
                ];

                break;

            case "select":
                sql = "select * from tbl_alumno";
                break;

            case "update":
                sql = "update tbl_alumno " +
                    " set nombre = ?, " +
                    " apellido = ? " +
                    " where numero_cuenta = ? ";

                //mandamos parametros para el update
                parametros = [datos.numero_cuenta,
                    datos.nombre,
                    datos.apelido,
                    datos.numero_cuenta
                ];
                break;

            case "delete":
                sql = "delete from tbl_alumno  where numero_cuenta =? ";

                //mandamos parametros para el delete
                parametros = [datos.numero_cuenta];
                break;


            default:
                sql = "";
                break;
        }
    }
    if (tabla == "prestamo") {
        switch (accion) {
            case "insert":
                sql = "insert into tbl_prestamos " +
                    "( id_libro, numero_cuenta, fecha_prestamo)"+
                    "values (?,?,?)";
                    parametros = [datos.id_libro,
                        datos.numero_cuenta,
                        datos.fecha_prestamo
                    ];
                    break;
                    
            case "select":
                sql = "select * from tbl_prestamos";
                break;
                
            case "update":
                sql = "update tbl_prestamos " +
                " set fecha_prestamo =? " +
                " where id_prestamo =? ";

                //mandamos parametros para el update
                parametros = [datos.fecha_prestamo,
                    datos.id_libro
                ];
                break;
                
            case "delete":
                sql = "delete from tbl_prestamos  where id_prestamo =? ";
                
                //mandamos parametros para el delete
                parametros = [datos.id_prestamo];
                break;
                
            default:
                sql = "";
                break;
        }
    }
    if (sql != "") {
        con.connect(function (err) {
            if (err) {
                console.log(err);
            } else {
                con.query(sql, parametros, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.write(JSON.stringify(result));
                        res.end();
                    }
                });
            }

        });
    } else {

        let retorno = {
            mensaje: "metodo no encontrado"
        };

        res.write(JSON.stringify(retorno));
        res.end();
    }





}).listen(3000)