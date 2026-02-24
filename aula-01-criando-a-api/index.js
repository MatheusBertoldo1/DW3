import express from "express"
const app = express()

// Configurações do app
app.use(express.json) // Permite uso de json nas operações

// Criando rota principal
app.get("/"), (req, res) => {
    res.status(200).json({message: "API rodando com sucesso"})
}

// Rodando a API na porta 4000
const port = 4000

app.listen(port, (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("API rodando na porta http://localhost:" + port)
    }
})