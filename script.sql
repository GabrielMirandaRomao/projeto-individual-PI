create database TheBeatles;

use TheBeatles;

create table usuarios (
	id_usuario int auto_increment primary key,
    nome_usuario varchar(60),
    idade_usuario char(2),
    email varchar(60),
	senha varchar(50),
    fk_album int,
    foreign key (fk_album) references albums(id_album)
);

create table albums (
	id_album int auto_increment primary key,
    nome_album varchar(60),
    ano_album char(4)
);

-- no campo fk_album, pegar o valor da combo box, exemplo, value = 2.