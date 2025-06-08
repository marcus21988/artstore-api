import { get, result } from "lodash";
import artistRepository from "../repository/artist-repository";

const getAllArtists = async () => {
    const data = await artistRepository.getAllArtists()
    const result: any= []

    data.forEach((artist:any) => {
        result.push({
            id: artist.id,
            fullName: artist.full_name,
            biography: artist.biography
        })
    })
    return result
}  

const getArtistById = async (id:Number) => {
    const data = await artistRepository.getArtistById(id)
    if (data && data.length > 0){
        return {
            id: data[0].id,
            fullName: data[0].full_name,
            biography: data[0].biography
        }
    }
    return null
}

const createArtist = async (artist: any) => {
    const data = await artistRepository.createArtist(artist)
    return data
}

const updateArtist = async (id:Number, artist:any) => {
    const data = await artistRepository.updateArtist(id, artist)
    return data
}

const deleteArtist = async (artistId: Number) => {
    const data = await artistRepository.deleteArtist(artistId)
    return data
}

const getDesignByArtistId = async (artistId: Number) => {
    const data = await artistRepository.getDesignByArtistId(artistId)
    return data
}

export default {getAllArtists, getArtistById, createArtist, updateArtist, deleteArtist, getDesignByArtistId}