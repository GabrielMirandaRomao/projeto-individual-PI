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

insert into albums 
	values (null, 'please please me', '1963'),
    (null, 'with the beatles', '1963'),
    (null, 'a hard days night', '1964'),
    (null, 'beatles for sale', '1964'),
    (null, 'help!', '1965'),
    (null, 'rubber soul', '1965'),
	(null, 'revolver', '1965'),
	(null, 'sgt.peppers ', '1965'),
    (null, 'magical mystery tour', '1966'),
    (null, 'the beatles - white album', '1966'),
    (null, 'yellow submarine', '1966'),
    (null, 'abbey road', '1967'),
	(null, 'let it be', '1967');