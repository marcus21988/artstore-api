import express, {Request, Response} from "express"
import designsService from "../service/designs-service"

const getAllDesigns = (req: Request, res:Response) => {
    res.send ({msg:`Getting all designs`})
}

const getDesignById = (req:Request, res:Response) => {
    const id = req.params.id;
    res.send({msg:`Getting a desing with the ID: ${id}`})
}

const createNewDesign = (req:Request, res:Response) => {
    res.send({msg:`Creating a new design`})
}

const updateDesign = (req:Request, res:Response) => {
    const id = req.params.id;
    res.send ({msg:`Updating a design with the ID: ${id}`})
}

const deleteDesign = (req:Request, res:Response) => {
    const id = req.params.id;
    res.send ({msg:`Deleting a design with the ID: ${id}`})
}

export default {getAllDesigns, getDesignById, createNewDesign, updateDesign, deleteDesign}