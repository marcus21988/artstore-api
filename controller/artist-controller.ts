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

export default {getAllArtists, getArtistById}