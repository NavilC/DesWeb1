var http = require('http');
const { parse } = require('path/posix');
const { stringify } = require('querystring');
var url = require('url');

http.createServer( function(req, res){
    
    // Por que es q en el ejemplo?
    // Por que a operación de leer los parametros de una url se le dice 
    // Query the url (Consulta los parametros de la ulr)
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    //para mandar el nombre de usuario
    let name = String(datos.name);
    res.write(name);
    res.write('<br>');
    //para realizar el doble del numero
    let result = parseFloat(datos.num1) *2;
    res.write(datos.num1 + " el doble es "  + " = " + result);
    //para un salto de linea
    res.write('<br>');
    //para sacar el triple de un numero
    result = parseFloat(datos.num2) *3;
    res.write(datos.num2 + " El triple es " + " = " + result);
    res.write('<br>');
    //para sacar la multiplicacion de un numero
    result = parseFloat(datos.num3) * (datos.num4);
    res.write(datos.num3 + "* " + datos.num4 + " = " + result);
    res.write('<br>');
    // para sacar la divicion de un numero
    result = parseFloat(datos.num5 ) / (datos.num6);
    res.write(datos.num5 + " / " + datos.num6 + " = " + result);
    res.end();

}).listen(3030);