// Importar o service
import gameServices from "../services/gameServices.js";

// Função para tratar a requisição de listar jogos

const getAllGames = async (req, res) => {
    try {
        const games = await gameServices.getAll()
        res.status(200).json({games : game})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Erro interno do servidor"})
    }
}

export default {getAllGames}