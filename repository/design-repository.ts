import dbConnection from "../common/db-connection";

const getAllDesigns = async () => {
    try {
        const data = await dbConnection.query('SELECT * FROM design')
        return data
    }
    catch (error:any) {
        return {success:false, msg: error.message}
    }
}

const getDesignById = async (id: Number) => {
    try {
        const data =  await dbConnection.query(`SELECT * FROM design WHERE id = ?`, [id])
        return data
    }catch (error:any){
    return {success:false, msg: error.message}
}
}

const createNewDesign = async (design:any) => {
    try {
        const data = await dbConnection.query(
            `INSERT INTO design (title, artist, updated, created) Values(?,?,now(), now())`,
            [design.title, design.artist, design.updated, design.created]
        )
    }
    catch(error:any) {
        return {success:false, msg: error.message}
    }
}

const updateDesign = async (id: Number, design:any) => {
    try {
        const data = await dbConnection.query(`UPDATE design SET title = ?, artist = ? WHERE id = ?`,
            [design.title, design.artist, id])
            return {success:true, data}
    } catch (error:any) {
        return {success: false, msg: error.message}
    }
}

const deleteDesign = async (id:Number) => {
    try{
    const data = dbConnection.query(`DELETE FROM design WHERE id = ?`, [id])
    return {sucess: true}
}
catch (error: any) {
    return {success:false, msg: error.message}
}
}

export default {getAllDesigns, getDesignById, createNewDesign, updateDesign, deleteDesign}