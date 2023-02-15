
create table tbl_pedidos
(
id_pedido int auto_increment primary key,
id_cliente int,
id_panadero int,
id_pan int,
id_empacador int,
fecha_pedido date,
constraint foreign key fk_id_cliente (id_cliente) references tbl_cliente (id_cliente),
constraint foreign key fk_id_panadero(id_panadero) references tbl_panadero (id_panadero),
constraint foreign key fk_id_pan (id_pan) references tbl_panes (id_pan),
constraint foreign key fk_id_empacador (id_empacador) references tbl_empacador (id_empacador)
);
create table tbl_envios
(
id_envios int primary key auto_increment,
id_pedido int,
id_delivery int,
constraint foreign key fk_id_pedido (id_pedido) references tbl_pedidos (id_pedido),
constraint foreign key fk_id_delivery (id_delivery) references tbl_delivery (id_delivery)
);

create table tbl_cliente
(
id_cliente int auto_increment primary key,
dni varchar(200) ,
nombre_cliente varchar(200),
direccion varchar (200)
);

create table tbl_panes
(
id_pan int auto_increment primary key,
tipo_pan varchar (200)

);

create table tbl_empacador
(
id_empacador int auto_increment primary key,
nombre varchar(200) ,
dni_empacador varchar(200),
edad_empacador int
);

create table tbl_panadero
(
id_panadero int primary key auto_increment,
nombre_panadero varchar(200),
dni_panadero varchar(200)
);

create table tbl_delivery
(
id_delivery int primary key auto_increment,
nombre_transportista varchar(200),
dni_transportista varchar(200)
);