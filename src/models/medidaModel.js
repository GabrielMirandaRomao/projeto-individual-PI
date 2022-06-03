var database = require("../database/config");

function buscarUltimasMedidas(idAquario) {
    instrucaoSql =
    `select 
        nome_album as 'Nome album', 
        count(*) as 'Votos' 
        from 
        usuarios join albums 
        on id_album = fk_album 
        group by id_album;`; 
    // `select 
    //                     ab.nome_album,
    //                     max(us.idade_usuario),
    //                     count(us.id_usuario)
    //                     from 
    //                     usuarios as us
    //                     join albums as ab
    //                     on ab.id_album = us.fk_album group by us.fk_album`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_usuario) {
    instrucaoSql = 
    `select 
        nome_album, 
        count(*) as votos 
        from 
        usuarios join albums 
        on id_album = fk_album 
        group by id_album;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}