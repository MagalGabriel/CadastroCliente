(async() => {
    const database = require('./dborm');
    const Cliente = require('./cliente');

    console.log(' Criar tabela ================================================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);
})();