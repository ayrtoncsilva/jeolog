const db = require('../db/connection');

class User {
    static async create({ CPF_motorista, nome, tipo_viagem, un_origem, un_destino }) {
        const query = 'INSERT INTO users (CPF_motorista, nome, tipo_viagem, un_origem, un_destino) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [CPF_motorista, nome, tipo_viagem, un_origem, un_destino];

        try {
            const { rows } = await db.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;
