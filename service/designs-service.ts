const getAllDesigns = () => {
    return {msg: 'Getting all the designs'}
}

const getDesignById = (id: Number) => {
    return {msg: `Getting a design with the ID: ${id}`}
}

const createNewDesign = () => {
    return {msg: `Creating a new design`}
}

const updateDesign = (id:Number)=> {
    return {msg: `Updating a design with the id: ${id}`}
}

const deleteDesign = (id: Number) => {
    return {msg: `Deleting a design with the id: ${id}`}
}


export default {getAllDesigns, getDesignById, createNewDesign, updateDesign, deleteDesign}