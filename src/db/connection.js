const { Poll } = require('pg');

const pool = new Poll({
    user: 'jeolog',
    host: 'localhost',
    database: 'db',
    password: 'admin',
    port: 5432
})

module.exports = pool;