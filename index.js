var http = require('http');
var mismodulos = require('./mismodulos');
var fs = require('fs');

http.createServer( function(req, res){

    fs.readFile( 'hola.html',  function(err, data){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('el doble de 4 es :' + mismodulos.doble('4', '2') + ' el triple de 4 es: '+ mismodulos.triple('4','3')) ;
    res.write(' ');
    res.end( 'la multiplicacion de 4  * 2 es ' +  mismodulos.multiplicacion('4','2') 
    + ' la divicion de 4 / 2 es: '+ mismodulos.Division('4','2'));

}).listen(3000);
