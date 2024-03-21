const db = require('../db/connection');

class User {
    static async create({ nome, tipo_viagem, un_origem, un_destino, num_viagem }) {
        const query = 'INSERT INTO users (nome, tipo_viagem, un_origem, un_destino, num_viagem) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [nome, tipo_viagem, un_origem, un_destino, num_viagem];

        try {
            const { rows } = await db.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}
