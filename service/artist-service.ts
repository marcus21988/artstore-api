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
}

export default {getAllArtists, getArtistById}