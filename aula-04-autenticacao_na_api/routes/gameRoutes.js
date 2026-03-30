import express from 'express'
import gameController from '../controllers/gameController.js'
import Auth from '../middleware/Auth.js'

const gameRoutes = express.Router()

// Na camada de routes é armazenado os endpoints (URLs) da API

// Endpoit para listar todos os games
gameRoutes.get("/games", Auth.Authorization,gameController.getAllGames)

// Endpoint para cadastrar um game
gameRoutes.post("/games", Auth.Authorization, gameController.createGames)

// Endpoint para exluir um game
gameRoutes.delete("/games/:id", Auth.Authorization, gameController.deleteGame)

// Endpoint para alterar um game
gameRoutes.put("/games/:id", Auth.Authorization, gameController.updateGame)

// Endpoint para listar um jogo unico
gameRoutes.get("/games/:id", Auth.Authorization, gameController.getOneGame)

export default gameRoutes