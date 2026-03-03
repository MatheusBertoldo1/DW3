import Game from "../models/Games.js"

class GameServices {
    async getAll(){
        try {
            // Método do mongoose para buscar dados no banco
            const games = await Game.find()
            return games
        } catch (error) {
            console.log(error)
        }
    }
}

export default new GameServices