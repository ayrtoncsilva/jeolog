const db = require('../db/connection')

class DadosTrip {
    static async create({km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, trip_placa}) {
        const query = 'INSERT INTO dados_trip(km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, trip_placa) VALUES () returning *'
        const values = [km_inicial, km_final, km_percorrido, diesel_prev, diesel_realizado, viagem_complemento, trip_placa]

    try {
        const { rows } = await db.query(query, values);
            return rows[0];
    } catch (error) {
        throw error;
    }
}
}

module.exports = DadosTrip