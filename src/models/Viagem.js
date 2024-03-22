const db = require('../db/connection');

class Viagem {
    static async create({ placa, date_ctbc, date_inicio_viagem, date_fim_viagem, duracao }) {
        const query = 'INSERT INTO viagem (placa, date_ctbc, date_inicio_viagem, date_fim_viagem, duracao) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [placa, date_ctbc, date_inicio_viagem, date_fim_viagem, duracao];

        try {
            const { rows } = await db.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Viagem;
