const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5432
});

client.connect()
.then(() => console.log('Conectado'))
.catch(err => console.error('Erro ao conectar', err));

module.exports = client;



