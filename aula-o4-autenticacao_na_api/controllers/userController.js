// Importar o service
import UserServices from "../services/UserServices.js";

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

export default { createUser }