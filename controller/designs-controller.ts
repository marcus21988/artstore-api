import express, {Request, Response} from "express"
import designsService from "../service/designs-service"

const getAllDesigns = async (req: Request, res:Response) => {
    const data = await designsService.getAllDesigns()
    res.send(data)
}

const getAllDesignsDetailed = async (req:Request, res:Response) => {
    const data = await designsService.getAllDesignsDetailed()
    res.send(data)
}

const getDesignById = async (req:Request, res:Response) => {
    const id = req.params.id;
    const data = await designsService.getDesignById(parseInt(id))
    res.send(data)
}

const createNewDesign = async (req:Request, res:Response) => {
    const data = await designsService.createNewDesign(req.body)
    res.send(data)
}

const updateDesign = async (req:Request, res:Response) => {
    const id = req.params.id;
    const data = await designsService.updateDesign(parseInt(id), req.body)
    res.send (data)
}

const deleteDesign = async (req:Request, res:Response) => {
    const id = req.params.id;
    const data = await designsService.deleteDesign(parseInt(id))
    res.send (data)
}

export default {getAllDesigns, getAllDesignsDetailed, getDesignById, createNewDesign, updateDesign, deleteDesign}