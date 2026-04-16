const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// 🔴 SEUS DADOS
const TOKEN = "2E7E881B30E78739FDC314AF";
const INSTANCE = "3F1BC4E8904402B648420E8BC9274D54";
const PHONE = "5515998402186";

app.post("/enviar", async (req, res) => {
    const { maquina, estacao, desc, prioridade } = req.body;

    const msg = `🚨 NOVA OS
Máquina: ${maquina}
Estação: ${estacao}
Problema: ${desc}
Prioridade: ${prioridade}`;

    try {
        await axios.post(https://api.z-api.io/instances/${INSTANCE}/token/${TOKEN}/send-text, {
            phone: PHONE,
            message: msg
        });

        res.send("OK");
    } catch (err) {
        console.log(err.response?.data || err.message);
        res.status(500).send("Erro ao enviar");
    }
});

app.listen(3000, () => console.log("Servidor rodando"));
