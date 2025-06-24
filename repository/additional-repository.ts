import dbConnection from "../common/db-connection";

const getFormats = async () => {
    try{
        const data = await dbConnection.query('SELECT * FROM Format')
        return {success: true, data}
    }
    catch (error:any) {
        return {sucess: false, err:error}
    }
}

const getStates = async () => {
    try{
    const data = await dbConnection.query('SELECT * FROM State')
    return {sucess:true, data}
}
    catch (error:any) {
        return {sucess:false, err:error}
    }
}

const getArticles = async () => {
    try{
        const data = await dbConnection.query('SELECT * FROM Article')
        return {success:true, data}
    }
    catch (error:any){
        return {sucess:false, err:error}
        }
}

const getSizes = async () => {
    try{
        const data = await dbConnection.query('SELECT * FROM Size')
        return {success:true, data}
    }
    catch (error:any){
        return {sucess:false, err:error}
    }
}

const getArtists = async () => {
    try{
        const data = await dbConnection.query('SELECT * FROM Artist')
        return {success:true, data}
    }
    catch (error:any){
        return { sucess: false, err:error}
    }
}

export default {getFormats, getStates, getArticles, getSizes, getArtists}