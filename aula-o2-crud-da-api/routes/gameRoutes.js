import express from 'express'
import gameController from '../controllers/gameController.js'

const gameRoutes = express.Router()

// Na camada de routes é armazenado os endpoints (URLs) da API

// Endpoit para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)

// Endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGames)

// Endpoint para exluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

export default gameRoutes