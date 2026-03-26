import User from "../models/Users.js"

class userServices {
    //Método para cadastrar um usuário
    async Create(nome, email, password){
        try {
            const newUser = new User({
                nome,
                email,
                password
            })

            await newUser.save()
        } catch (error) {
            console.log(error)
        }
    }

    // Método para buscar usuário
    async GetOne(email){
        try {
            // FindOne busca um registro no bd
            const user = await User.findOne({email : email})
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

export default new userServices()