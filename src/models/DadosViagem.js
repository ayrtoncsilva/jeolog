const db = require('../db/connection');

class DadosViagem {
    static async create({ km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, capacidade_frota_kg, trip_placa }) {
        const query = 'INSERT INTO dados_viagem (km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, capacidade_frota_kg, trip_placa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const values = [km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, capacidade_frota_kg, trip_placa];

        try {
            const { rows } = await db.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DadosViagem;
