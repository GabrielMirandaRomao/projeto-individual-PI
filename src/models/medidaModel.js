var database = require("../database/config");

function buscarUltimasMedidas() {
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

function buscarMedidasEmTempoReal(id_usuario) {
    instrucaoSql = 
    `select 
        nome_album, 
        count(id_album) as votos 
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