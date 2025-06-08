import express from "express";
import artistController from "../controller/artist-controller";

const artistRouter = express.Router()

artistRouter.route('/')
.get(artistController.getAllArtists)
.post(artistController.createArtist)

artistRouter.route('/:id')
.get(artistController.getArtistById)
.put(artistController.updateArtist)
.delete(artistController.deleteArtist)

artistRouter.route('/:id/designs')
.get(artistController.getDesignByArtistId)


// artistRouter.route('/:fullName')
// .put(artistController.updateArtist)


export default artistRouter