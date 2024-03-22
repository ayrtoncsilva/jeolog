const express = require("express");
const pool = require("./src/db/connection");

const app = express();

app.get("/", async (request, response) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM users");
        const users = result.rows;
        client.release();
        response.json(users);
    } catch (err) {
        console.error("Erro ao buscar usuários:", err);
        response.status(500).send("Erro ao buscar usuários");
    }
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
