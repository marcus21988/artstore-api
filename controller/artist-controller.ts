import { Request,Response } from "express";
import artistRepository from "../repository/artist-repository";
import artistService from "../service/artist-service";

const getAllArtists = async (req:Request, res:Response) => {
    const data = await artistRepository.getAllArtists()
    res.send(data)
}

const getArtistById = async (req:Request, res:Response) => {
    const artistId = req.params.id
    const data = await artistService.getArtistById(parseInt(artistId))
    res.send(data)
}

const createArtist = async (req:Request, res:Response) => {
    const data = await artistService.createArtist(req.body)
    res.send(data)
}

const updateArtist = async (req:Request, res:Response) => {
    const id = req.params.id
    const data = await artistService.updateArtist(parseInt(id), req.body)
    res.send(data)
}

const deleteArtist = async (req:Request, res:Response) => {
    const artistId = req.params.id
    const data = await artistService.deleteArtist(parseInt(artistId))
    res.send(data)
}

const getDesignByArtistId = async (req:Request, res:Response) => {
    const {artistId} = req.body
    const data = await artistService.getDesignByArtistId(artistId)
    res.send(data)
}

export default {getAllArtists, getArtistById, createArtist, updateArtist, deleteArtist, getDesignByArtistId}