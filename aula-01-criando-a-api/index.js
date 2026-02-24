import express from "express"

const app = express()

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