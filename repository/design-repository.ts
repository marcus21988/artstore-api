import dbConnection from "../common/db-connection";
import artistController from "../controller/artist-controller";
import designsController from "../controller/designs-controller";

const getAllDesigns = async () => {
    try {
        const data = await dbConnection.query('SELECT * FROM Art')
        return data
    }
    catch (error:any) {
        return {success:false, msg: error.message}
    }
}

const getAllDesignsDetailed = async () => {
    try {
        const data = await dbConnection.query(`SELECT a.id, a.title, format.name AS Format, state.name AS State,
             article.name AS Article, size.name AS Size, artist.name AS Artist, a.date_published, a.ISBN, a.total_artworks,
              a.sold_artworks, a.reserved_artworks, a.description, a.image_path
            FROM Art a
             LEFT JOIN Format format ON a.format_id = format.id
             LEFT JOIN State state ON a.state_id = state.id
             LEFT JOIN Article article ON a.article_id = article.id
             LEFT JOIN Size size ON a.size_id = size.id
             LEFT JOIN Artist artist ON a.artist_id = artist.id`)
             return data
    }
    catch(error:any){
        return {success:false, msg: error.message}
    }
}

const getDesignById = async (id: Number) => {
    try {
        const data =  await dbConnection.query(`SELECT * FROM Art WHERE id = ?`, [id])
        return data
    }catch (error:any){
    return {success:false, msg: error.message}
}
}

const createNewDesign = async (design:any) => {
    try {
        const data = await dbConnection.query(
            `INSERT INTO Art (title, format_id, artist_id, image_path) Values(?,?,?,?)`,
            [design.title, design.format, design.artist, design.updated, design.created, design.imagePath]
        )
    }
    catch(error:any) {
        return {success:false, msg: error.message}
    }
}

const updateDesign = async (id: Number, Art:any) => {
    try {
        const data = await dbConnection.query(`UPDATE Art SET title = ?, format_id = ?, image_path = ? WHERE id = ?`,
            [Art.Controller, Art.title, Art.format, Art.imagePath, id])
            return {success:true, data}
    } catch (error:any) {
        return {success: false, msg: error.message}
    }
}

const deleteDesign = async (id:Number) => {
    try{
    const data = dbConnection.query(`DELETE FROM Art WHERE id = ?`, [id])
    return {sucess: true}
}
catch (error: any) {
    return {success:false, msg: error.message}
}
}

export default {getAllDesigns, getAllDesignsDetailed, getDesignById, createNewDesign, updateDesign, deleteDesign}