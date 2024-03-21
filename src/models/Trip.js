const db = require('../db/connection');

class Trip {
    static async create({
        placa,
        data_ctbc,
        data_inicio_viagem,
        data_fim_viagem,
        duracao
     }) {
        const query = 'INSERT INTO trip (placa, data_ctbc, data_inicio, data_fim_viagem, duracao) VALUES ()' 
        const values = [placa, data_ctbc, data_inicio, data_fim_viagem, duracao];

        try {
            const { rows } = await db.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
     }
}

module.exports = Trip