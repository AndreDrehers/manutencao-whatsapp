const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// 🔴 COLOQUE SEUS DADOS DA Z-API
const TOKEN = "COLE_SEU_TOKEN_AQUI";
const INSTANCE = "COLE_SEU_ID_AQUI";
const PHONE = "5511SEUNUMERO"; // exemplo: 5511999999999

app.post("/enviar", async (req, res) => {
    const { maquina, estacao, desc, prioridade } = req.body;

    const msg = `🚨 NOVA OS
Máquina: ${maquina}
Estação: ${estacao}
Problema: ${desc}
Prioridade: ${prioridade}`;

    try {
        await axios.post(`https://api.z-api.io/instances/${INSTANCE}/token/${TOKEN}/send-text`, {
            phone: PHONE,
            message: msg
        });

        res.send("OK");
    } catch (err) {
        res.status(500).send("Erro ao enviar");
    }
});

app.listen(3000, () => console.log("Servidor rodando"));
