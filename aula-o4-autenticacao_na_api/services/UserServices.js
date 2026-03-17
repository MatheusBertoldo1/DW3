import User from "../models/Users.js"

class userServices {
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
}

export default new userServices()