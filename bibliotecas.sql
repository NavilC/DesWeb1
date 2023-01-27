create table tbl_registro_libros
(
    id_libro int auto_increment primary key ,
    nombre_libro varchar(200),
    genero_literario varchar(200),
    fecha_lanzamineto date,
	nombre_autor varchar(200)
);


create table tbl_alumno
(
    numero_cuenta varchar(200) primary key,
    nombre varchar(200),
    apellido varchar(200)
);

create table tbl_prestamos
(
	id_prestamo int primary key,
	id_libro  int,
	numero_cuenta varchar(200),
	fecha_prestamo date,
	constraint foreign key fk_id_libro (id_libro) references  tbl_registro_libros(id_libro),
	constraint foreign key fk_numero_cuenta (numero_cuenta) references tbl_alumno (numero_cuenta)
);


insert into tbl_registro_libros ( nombre_libro, genero_literario,fecha_lanzamineto, nombre_autor )
values
    ('Romeo y Julieta', 'Tragedia', '1597-02-20','wiliam'),
    ('la iliada', 'poesia', '1572-09-01', 'homero');

insert into tbl_alumno(numero_cuenta, nombre, apellido)
values
    ('T62211058', 'Alejandro', 'Caceres'),
    ('T20145221', 'Anuel', 'Zelaya');
    
insert into tbl_prestamos( id_libro, numero_cuenta, fecha_prestamo)
values
(1,'T62211058','2023-01-25');

Select * from tbl_prestamos;
Select * from tbl_registro_libros