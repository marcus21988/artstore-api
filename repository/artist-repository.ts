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

const createArtist = async (artist:any) => {
    try {
        const data = await dbConnection.query(`INSERT  INTO ArtistDetailed (full_name, biography) 
        VALUES (?, ?)`, [artist.full_name, artist.biography])
        return {success: true, data} 
    }
    catch(error:any) {
        return {success: false, msg: error.message}
    }
}

const updateArtist = async (artist: any) => {
    try {
        const data = await dbConnection.query(`UPDATE ArtistDetailed SET full_name = ?, biography = ?
        WHERE id = ?`, [artist.full_name, artist.biography, artist.id])
        return {success: true, data}
    }
    catch(error:any) {
        return {sucess:false, msg:error.message}
    }
}

const deleteArtist = async (artistId: Number) => {
    try {
        const data = await dbConnection.query(`DELETE FROM ArtistDetailed WHERE id = ?`, [artistId])
        return {success:true}
    }
    catch(error: any){
        return {success:false, msg:error.message}
    }
}

const getDesignByAuthorId = async (artistId:Number) => {
    try {
        const data = await dbConnection.query(`SELECT a.* FROM Art a JOIN ArtArtistDetailed aad ON a.id WHERE aad.ArtistDetailedId =?`, [artistId])
        return data
    }
    catch(error:any) {
        return {sucess:false, msg:error.message}
    }
}

export default {getAllArtists, getArtistById, createArtist, updateArtist, deleteArtist, getDesignByAuthorId}