import userRepository from "../repository/user-repository";
import crypto from "crypto";
import jwt from "jsonwebtoken"

const register = async (user:any) => {
    //from password gets hashedPassword, password is hashed here
    user.hashedPassword = crypto.createHash('md5').update(user.password).digest('hex')
    const result:any = await userRepository.register(user)

    //add token

    if(result.affectedRows > 0) {
        //user created, send token for the user and send in response
        const token = jwt.sign({
            username: user.username,
            isAdmin:false
        }, 'SECRET')
        return {sucess: true, token}
    } else {
        return {success: false, result}
    }  
}

const login = async (user:any) => {
    user.hashedPassword = crypto.createHash('md5')
                                .update(user.password)
                                .digest('hex')
    const result = await userRepository.login(user)

    if(result && result.length > 0) {
        // means that user has logged in
        const token = jwt.sign(
            {username: user.username, isAdmin: result[0].is_admin == 1 ? true : false},
            'SECRET'
        )
        return {success:true, token}
    } else {
        return {success: false, msg: "Not able to log in!"}
    }

    return {success:true}
}

export default {register, login}