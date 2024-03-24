const express = require("express");
const path = require("path");
const client = require("./src/db/connection");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", async (request, response) => {
   response.sendFile('../apiForm/src/public/index.html')
});

app.post('/submit', async (request, response) => { 
    console.log(request.body);
    const { reference, nome, cpf, ctbc, tipoviagem, unorigem, undest, placa, duracao, ctrbdate, 
            iniciodate, returndata, kminicial, kmfinal, kmpercurso, dieselprevisto, dieselrealizad, 
            pesoorigin, pesoretorno, valororiginfrete, valorretornofrete, aproveitamentoorigem, aproveitamentoretorno, marcacao,
            jornada, trafego, trafego2, totalconfig, media, norma, tipoviageman, mediarealizada, mediamax, saldometa } = request.body;

    try {
        const query = `
            INSERT INTO usuarios 
            (reference, nome, cpf, ctbc, tipoviagem, unorigem, undest, placa, duracao, ctrbdate, iniciodate, returndata, 
            kminicial, kmfinal, kmpercurso, dieselprevisto, dieselrealizad, pesoorigin, pesoretorno, valororiginfrete,valorretornofrete, 
            aproveitamentoorigem, aproveitamentoretorno, marcacao, jornada, trafego, trafego2, totalconfig, media, norma, 
            tipoviageman, mediarealizada, mediamax, saldometa) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, 
            $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34)`;
            
        const result = await client.query(query, [reference, nome, cpf, ctbc, tipoviagem, unorigem, undest, placa, duracao, 
            ctrbdate, iniciodate, returndata, kminicial, kmfinal, kmpercurso, dieselprevisto, dieselrealizad, pesoorigin, 
            pesoretorno, valororiginfrete, valorretornofrete, aproveitamentoorigem, aproveitamentoretorno, marcacao, jornada, trafego, trafego2, 
            totalconfig, media, norma, tipoviageman, mediarealizada, mediamax, saldometa]);

        console.log("Inserção realizada com sucesso!");
        response.status(200).send("Inserção realizada com sucesso!");
    } catch (error) {
        console.error("Erro ao inserir dados:", error);
        response.status(500).send("Erro ao inserir dados.");
    }
});


const PORT = 3334;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

