import dbConnection from "../common/db-connection";

const getAllArtists = async () => {
    try {
        const data = await dbConnection.query(`SELECT * FROM ArtistDetailed`)
        return data
    }
    catch(error:any){
        return {success:false, msg: error.message}
    }
}

const getArtistById = async (id: Number) => {
    try {
        const data = await dbConnection.query(`SELECT * FROM ArtistDetailed Where id = ?`, [id])
        return data
    }
    catch(error:any){
        return {success: false, msg: error.message}
    }
}

export default {getAllArtists, getArtistById}