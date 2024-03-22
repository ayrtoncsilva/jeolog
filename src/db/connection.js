const { Pool } = require('pg');

const pool = new Pool({
    user: 'PostgreSQL 16',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5432
});

module.exports = pool;
