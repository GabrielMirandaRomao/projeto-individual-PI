var database = require("../database/config");

function buscarUltimasMedidas(id_usuario) {
    instrucaoSql = `select 
                        * 
                        from 
                        usuarios 
                        join albums 
                        on id_album = fk_album where id_usuario = ${id_usuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_usuario) {
    instrucaoSql = `select ab.nome_album, us.idade_usuario
                        from 
                        albums as ab join usuarios as us 
                        on ab.id_album = us.fk_album`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}