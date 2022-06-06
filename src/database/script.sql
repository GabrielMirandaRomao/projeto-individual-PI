create database TheBeatles;

use TheBeatles;

create table usuarios (
	id_usuario int auto_increment primary key,
    nome_usuario varchar(60),
    email varchar(60),
	senha varchar(50),
    fk_album int,
    foreign key (fk_album) references albums(id_album)
);

create table albums (
	id_album int auto_increment primary key,
    nome_album varchar(60),
    ano_album char(4),
    fase int
);

-- no campo fk_album, pegar o valor da combo box, exemplo, value = 2.

insert into albums 
values
    (null, 'please please me', '1963', 1),
    (null, 'with the beatles', '1963', 1),
    (null, 'a hard days night', '1964', 1),
    (null, 'beatles for sale', '1964', 1),
    (null, 'help!', '1965', 1),
    (null, 'rubber soul', '1965', 1),
	(null, 'revolver', '1966', 2),
	(null, 'sgt.peppers ', '1967', 2),
    (null, 'magical mystery tour', '1967', 2),
    (null, 'the beatles - white album', '1968', 2),
    (null, 'yellow submarine', '1969', 2),
    (null, 'abbey road', '1969', 2),
	(null, 'let it be', '1969',2);

insert into usuarios 
values 
    (null, 'felipe', 'teste1@gmail.com', '12345678',  1),
	(null, 'fernando', 'teste2@gmail.com', '12345678', 2),
    (null, 'victor', 'teste3@gmail.com', '12345678', 2),
    (null, 'guilherme', 'teste4@gmail.com', '12345678', 2),
	(null, 'henrique', 'teste5@gmail.com', '12345678', 2),
    (null, 'charles', 'teste6@gmail.com', '12345678',  2),
	(null, 'fernanda', 'teste7@gmail.com', '12345678', 5),
    (null, 'vinicius', 'teste8@gmail.com', '12345678', 5),
    (null, 'gabriel', 'teste9@gmail.com', '12345678', 7),
	(null, 'lucas', 'teste10@gmail.com', '12345678', 7),
	(null, 'noleto', 'teste11@gmail.com', '12345678', 1),
	(null, 'joão' , 'teste12@mail.com', '12345678', 9),
	(null, 'anderson', 'teste13@gmail.com', '12345678', 1),
	(null, 'kauan' , 'teste14@mail.com', '12345678', 3),
    (null, 'caio', 'teste15@gmail.com', '12345678', 3),
    (null, 'alex', 'teste16@gmail.com', '12345678', 4),
	(null, 'ricardo', 'teste17@gmail.com', '12345678', 4),
    (null, 'jose', 'teste18@gmail.com', '12345678',  4),
	(null, 'samuel', 'teste19@gmail.com', '12345678', 6),
    (null, 'gustavo', 'teste20@gmail.com', '12345678', 6),
    (null, 'maria', 'teste21@gmail.com', '12345678', 6),
	(null, 'giulia', 'teste22@gmail.com', '12345678', 8),
    (null, 'karina' , 'teste23@mail.com', '12345678', 8),
    (null, 'augusto', 'teste24@gmail.com', '12345678', 9),
    (null, 'victoria', 'teste25@gmail.com', '12345678', 9),
	(null, 'jaqueline', 'teste26@gmail.com', '12345678', 10),
    (null, 'mateus', 'teste27@gmail.com', '12345678',  10),
	(null, 'diogo', 'teste28@gmail.com', '12345678', 11),
    (null, 'tiago', 'teste29@gmail.com', '12345678', 11),
    (null, 'pedro', 'teste30@gmail.com', '12345678', 12),
    (null, 'andre', 'teste31@gmail.com', '12345678', 13), 
    (null, 'alexandre', 'teste32@gmail.com', '12345678', 13),
    (null, 'vera', 'teste33@gmail.com', '12345678', 13),
    (null, 'mauricio' , 'teste34@gmail.com', '12345678', 12),
    (null, 'brenda', 'teste35@gmail.com', '12345678',  10);