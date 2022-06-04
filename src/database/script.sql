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
values
    (null, 'please please me', '1963'),
    (null, 'with the beatles', '1963'),
    (null, 'a hard days night', '1964'),
    (null, 'beatles for sale', '1964'),
    (null, 'help!', '1965'),
    (null, 'rubber soul', '1965'),
	(null, 'revolver', '1966'),
	(null, 'sgt.peppers ', '1967'),
    (null, 'magical mystery tour', '1967'),
    (null, 'the beatles - white album', '1968'),
    (null, 'yellow submarine', '1969'),
    (null, 'abbey road', '1969'),
	(null, 'let it be', '1969');

insert into usuarios 
values 
    (null, 'felipe', 20 , 'teste1@gmail.com', '12345678',  1),
	(null, 'fernando', 19 , 'teste2@gmail.com', '12345678', 2),
    (null, 'victor', 22 , 'teste3@gmail.com', '12345678', 2),
    (null, 'guilherme', 23 , 'teste4@gmail.com', '12345678', 2),
	(null, 'henrique', 25 , 'teste5@gmail.com', '12345678', 2),
    (null, 'charles', 20 , 'teste6@gmail.com', '12345678',  2),
	(null, 'fernanda', 24 , 'teste7@gmail.com', '12345678', 5),
    (null, 'vinicius', 22 , 'teste8@gmail.com', '12345678', 5),
    (null, 'gabriel', 22 , 'teste9@gmail.com', '12345678', 7),
	(null, 'lucas', 25 , 'teste10@gmail.com', '12345678', 7),
	(null, 'noleto', 20 , 'teste11@gmail.com', '12345678', 1),
	(null, 'joão', 19 , 'teste12@mail.com', '12345678', 9),
	(null, 'anderson', 20 , 'teste13@gmail.com', '12345678', 1),
	(null, 'kauan', 19 , 'teste14@mail.com', '12345678', 3),
    (null, 'caio', 22 , 'teste15@gmail.com', '12345678', 3),
    (null, 'alex', 23 , 'teste16@gmail.com', '12345678', 4),
	(null, 'ricardo', 25 , 'teste17@gmail.com', '12345678', 4),
    (null, 'jose', 20 , 'teste18@gmail.com', '12345678',  4),
	(null, 'samuel', 24 , 'teste19@gmail.com', '12345678', 6),
    (null, 'gustavo', 22 , 'teste20@gmail.com', '12345678', 6),
    (null, 'maria', 22 , 'teste21@gmail.com', '12345678', 6),
	(null, 'giulia', 25 , 'teste22@gmail.com', '12345678', 8),
    (null, 'karina', 19 , 'teste23@mail.com', '12345678', 8),
    (null, 'augusto', 22 , 'teste24@gmail.com', '12345678', 9),
    (null, 'victoria', 23 , 'teste25@gmail.com', '12345678', 9),
	(null, 'jaqueline', 25 , 'teste26@gmail.com', '12345678', 10),
    (null, 'mateus', 20 , 'teste27@gmail.com', '12345678',  10),
	(null, 'diogo', 24 , 'teste28@gmail.com', '12345678', 11),
    (null, 'tiago', 22 , 'teste29@gmail.com', '12345678', 11),
    (null, 'pedro', 24 , 'teste30@gmail.com', '12345678', 12);