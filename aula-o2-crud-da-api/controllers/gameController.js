// Importar o service
import gameServices from "../services/gameServices.js";
import { ObjectId } from "mongodb";

// Função para tratar a requisição de listar jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameServices.getAll()
        res.status(200).json({games : games})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Erro interno do servidor. Não foi possível listar os jogos"})
    }
}

// Função para tratar a requisição de CADASTRAR um jogo
const createGames = async (req, res) => {
    try {
        const {title, platform, year, price} = req.body // Coletando dados do corpo da requisição
        await gameServices.Create(title, platform, year, price)
        res.status(201).json({message: "Jogo cadastrado com sucesso"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Erro interno do servidor. Não foi possível cadastrar o jogo"})
    }
}

// Função para DELETAR um jogo
const deleteGame = async (req, res) => {
    try {
        const id  = req.params.id

        // Validação do id
        if(ObjectId.isValid(id)) { // Coletando id
            await gameServices.Delete(id)
            res.status(204).json({message: "Jogo excluído com sucesso"}) // Cod 204 (apagar) - NO CONTENT - 
        }
        else {
            res.status(400).json({error: "Erro ao validar id para excluir o jogo"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro no servidor"})
    }
}

export default {getAllGames,  createGames, deleteGame }