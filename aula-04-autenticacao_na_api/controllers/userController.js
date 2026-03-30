// Importar o service
import UserServices from "../services/UserServices.js";

// Importantdo o JWT - token (Json Web Token)
import  jwt  from "jsonwebtoken";

// Segredo para gerar token da API
const JWTSecret = "segredo-secreto"

// Função para cadastrar um user
const createUser = async (req, res) => {
    try {
        const {nome, email, password} = req.body
        await UserServices.Create(nome, email, password)
        res.status(201).json({message: "Usuário cadastrado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Não foi possível cadastrar o usuário. Erro interno do servidor"})
    }
}

// Função de Login
const LoginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        // Email existe
        if(email != undefined){
            const user = await UserServices.GetOne(email) // Buscando no banco

            // Se o usuário for encontrado
            if(user != undefined){
                if(user.password == password){
                    // CRIAR TOKEN
                    jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
                        if(error){
                            res.status(400).json({message: "Não foi possível gerar o token da autenticação"})
                        } else {
                            res.status(200).json({token: token, message: "Login realizado com sucesso!"})
                        }
                    })
                }
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Não foi possível realizar o login. Erro interno do servidor"})
    }
}

export default { createUser, LoginUser, JWTSecret}