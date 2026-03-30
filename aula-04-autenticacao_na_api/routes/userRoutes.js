// import express 
import express from 'express'

// Carregar o express.Router()
const userRoutes = express.Router()

// Importar o controller
import userController from '../controllers/userController.js'

// Endpoint para CADASTRAR um usuário
userRoutes.post('/user', userController.createUser)

// endpoint para LOGAR um usuario
userRoutes.post("/auth", userController.LoginUser)

export default userRoutes