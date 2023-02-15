var url = "https://desfrlopez.me/acaceres/api/";

funcionprueba = () => {
  $.getJSON(url + "tbl_cliente", (data) => {
    console.log(data);
    cuerpoTablas(data);
  });
}

cuerpoTablas = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");

    celda1.innerHTML = p.id_cliente;
    celda2.innerHTML = p.dni;
    celda3.innerHTML = p.nombre_cliente;
    celda4.innerHTML = p.direccion;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}

funcionPanes = () => {
  $.getJSON(url + "tbl_panes", (data) => {
    console.log(data);
    CuerpoPanes(data);
  });
}
CuerpoPanes = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_panes");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");

    celda1.innerHTML = p.id_pan;
    celda2.innerHTML = p.tipo_pan;

    fila.appendChild(celda1);
    fila.appendChild(celda2);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}
funcionPanadero = () => {
  $.getJSON(url + "tbl_panadero", (data) => {
    console.log(data);
    CuerpoPanadero(data);
  });
}
CuerpoPanadero = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_panadero");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");

    celda1.innerHTML = p.id_panadero;
    celda2.innerHTML = p.nombre_panadero;
    celda3.innerHTML = p.dni_panadero;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}

funcionEmpacador = () => {
  $.getJSON(url + "tbl_empacador", (data) => {
    console.log(data);
    CuerpoEmpacador(data);
  });
}

CuerpoEmpacador = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_empacador");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");

    celda1.innerHTML = p.id_empacador;;
    celda2.innerHTML = p.nombre;
    celda3.innerHTML = p.dni_empacador;
    celda4.innerHTML = p.edad_empacador;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}

funcionDelivery = () => {
  $.getJSON(url + "tbl_delivery", (data) => {
    console.log(data);
    CuerpoDelivery(data);
  });
}

CuerpoDelivery = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_delivery");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");

    celda1.innerHTML = p.id_delivery;
    celda2.innerHTML = p.nombre_transportista;
    celda3.innerHTML = p.dni_transportista;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}

funcionEnvios = () => {
  $.getJSON(url + "tbl_envios", (data) => {
    console.log(data);
    CuerpoEnvios(data);
  });
}

CuerpoEnvios = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_envios");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");

    celda1.innerHTML = p.id_envios;
    celda2.innerHTML = p.id_pedido;
    celda3.innerHTML = p.id_delivery;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}

funcionPedidos = () => {
  $.getJSON(url + "tbl_pedidos", (data) => {
    cuerpoPedidos(data);
    console.log(data);
  });
}

cuerpoPedidos = (data) => {
  var cuerpo = document.getElementById("cuerpo_tabla_pedidos");
  /*se crean las filas donde se agregan los datos de la 
   de la variable usuarios*/
  data.forEach(p => {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("th");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");
    var celda6 = document.createElement("td");

    celda1.innerHTML = p.id_pedido;
    celda2.innerHTML = p.id_cliente;
    celda3.innerHTML = p.id_panadero;
    celda4.innerHTML = p.id_pan;
    celda5.innerHTML = p.id_empacador;
    celda6.innerHTML = p.fecha_pedido;

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);
    fila.appendChild(celda6);

    cuerpo.appendChild(fila);
    //para seguir aumentado el numero de ingresos 
  });
}


insertarPanadero = (e) => {
  e.preventDefault();
  //ingresar el panadero
  var datospanadero = {
    nombre_panadero: $("[name = 'nombre_panadero']").val(),
    dni_panadero: $("[name = 'dni_panadero']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_panadero",
    data: JSON.stringify(datospanadero),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
};

function ActualizarPanadero() {
  var datospanadero = {
    nombre_panadero: $("[name = 'nombre_panadero']").val(),
    dni_panadero: $("[name = 'dni_panadero']").val(),
  };
  let id = $("[name = 'id_panadero']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_panadero"+"/"+id,
    data: JSON.stringify(datospanadero),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  
}

function BorrarPanadero() {
  let id = $("[name = 'id_panadero']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_panadero"+"/"+id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}

insertarDelivery = (e) => {
  e.preventDefault();
  var datosdelivery = {
    nombre_transportista: $("[name = 'nombre_transportista']").val(),
    dni_transportista: $("[name = 'dni_transportista']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_delivery",
    data: JSON.stringify(datosdelivery),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
};

function ActualizarDelivery() {
  var datosdelivery = {
    nombre_transportista: $("[name = 'nombre_transportista']").val(),
    dni_transportista: $("[name = 'dni_transportista']").val(),
  };
  let id = $("[name = 'id_delivery']").val();
  $.ajax({
    type: "PUT",
    url: url +"tbl_delivery" +"/" +id,
    data: JSON.stringify(datosdelivery),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

function BorrarDelivery() {
  let id = $("[name = 'id_delivery']").val();
    $.ajax({
    type: "DELETE",
    url: url + "tbl_delivery" +"/" +id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}

insertarEnvios = (e) => {
  e.preventDefault();
  var datosEnvios = {
    id_pedido: $("[name = 'id_delivery']").val(),
    id_delivery: $("[name = 'id_transportista']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_envios",
    data: JSON.stringify(datosEnvios),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
};

function ActializarEnvios() {
  var datosEnvios = {
    id_pedido: $("[name = 'id_delivery']").val(),
    id_delivery: $("[name = 'id_transportista']").val(),
  };
  let id = $("[name = 'id_envio']").val();

  $.ajax({
    type: "PUT",
    url: url + "tbl_envios"+"/"+id,
    data: JSON.stringify(datosEnvios),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  
}

function BorrarEnvios() {
  let id = $("[name = 'id_envio']").val();
  $.ajax({
    type: "DELETE",
    url: url + "tbl_envios" +"/" +id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
  
}

insertarpedidos = (e) => {
  e.preventDefault();
  var datosPedidos = {
    id_cliente: $("[name = 'id_cliente']").val(),
    id_panadero: $("[name = 'id_panadero']").val(),
    id_pan: $("[name = 'id_pan']").val(),
    id_empacador: $("[name = 'id_empacador']").val(),
    fecha_pedido: $("[name = 'fecha']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_pedidos",
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      s
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
};

function ActualizaPedidos() {
  var datosPedidos = {
    id_cliente: $("[name = 'id_cliente']").val(),
    id_panadero: $("[name = 'id_panadero']").val(),
    id_pan: $("[name = 'id_pan']").val(),
    id_empacador: $("[name = 'id_empacador']").val(),
    fecha_pedido: $("[name = 'fecha']").val(),
  };
  let id = $("[name = 'id_pedido']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_pedidos"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

function BorrarPedidos() {
  let id = $("[name = 'id_pedido']").val(); 
  $.ajax({
    type: "DELETE",
    url: url + "tbl_pedidos"+"/"+id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

insertarEmpacador = (e) => {
  //ingresar el empacador
  var datosempacador = {
    nombre: $("[name = 'nombre']").val(),
    dni_empacador: $("[name = 'dni_empacador']").val(),
    edad_empacador: $("[name = 'edad_empacador']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_empacador",
    data: JSON.stringify(datosempacador),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
};

function actualizarEmpacador(){
  var datosempacador = {
    nombre: $("[name = 'nombre']").val(),
    dni_empacador: $("[name = 'dni_empacador']").val(),
    edad_empacador: $("[name = 'edad_empacador']").val(),
  };
  let id = $("[name = 'id_empacador']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_empacador"+"/"+id,
    data: JSON.stringify(datosempacador),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

function BorrarEmpacador (){
  let id = $("[name = 'id_empacador']").val();
  $.ajax({
    type: "DELETE",
    url : url + "tbl_empacador"+"/"+id,
    success: function(data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}

insertarPanes = (e) => {
  e.preventDefault();
  //ingresar los tipos de panes
  var datospanes = {
    tipo_pan: $("[name = 'pan']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_panes",
    data: JSON.stringify(datospanes),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  funcionPanes ();
};

function actualizarPanes(){
  var datospanes = {
    tipo_pan: $("[name = 'pan']").val(),
  };
  let id = $("[name = 'id_pan']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_panes"+"/"+id,
    data: JSON.stringify(datospanes),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  funcionPanes();
}

function borrarPanes(){
  let id = $("[name = 'id_pan']").val();
  $.ajax({
    type: "DELETE",
    url: url + "tbl_panes" +"/" +id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
  funcionPanes();
}

insertarCliente = (e) => {
  jQuery.ajaxSetup({async:false})
  e.preventDefault();

  //ingresar el cliente
  var datosclientes = {
    nombre_cliente: $("[name = 'cliente']").val(),
    dni: $("[name = 'dni']").val(),
    direccion: $("[name = 'direccion']").val(),
  };

  $.ajax({
    type: "POST",
    url: url + "tbl_cliente",
    data: JSON.stringify(datosclientes),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  funcionprueba();
};

function actualizarCliente() {
  jQuery.ajaxSetup({async:false})
  var datosclientes = {
    nombre_cliente: $("[name = 'cliente']").val(),
    dni: $("[name = 'dni']").val(),
    direccion: $("[name = 'direccion']").val(),
  };

  let id = $("[name = 'id_cliente']").val();

  $.ajax({
    type: "PUT",
    url: url + "tbl_cliente" +"/" +id,
    data: JSON.stringify(datosclientes),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
  funcionprueba();
}

function BorrarCliente(){
  jQuery.ajaxSetup({async:false})
  let id = $("[name = 'id_cliente']").val();
  $.ajax({
    type: "DELETE",
    url: url + "tbl_cliente" +"/" +id,
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
  funcionprueba();
}

funcionprueba();
funcionPedidos();
funcionEnvios();
funcionDelivery();
funcionEmpacador();
funcionPanadero();
funcionPanes ();