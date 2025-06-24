import { Request,Response } from "express";
import additionalService from "../service/additional-service";

const getFormats = async (req: Request, res:Response) => {
    const data = await additionalService.getFormats()
    res.send(data)
}

const getStates = async (req: Request, res:Response) => {
    const data = await additionalService.getStates()
    res.send(data)
}
const getArticles = async (req: Request, res:Response) => {
    const data = await additionalService.getArticles()
    res.send(data)
}
const getSizes = async (req: Request, res:Response) => {
    const data = await additionalService.getSizes()
    res.send(data)
}
const getArtists = async (req: Request, res:Response) => {
    const data = await additionalService.getArtists()
    res.send(data)
}

export default {getFormats, getStates, getArticles, getSizes, getArtists}