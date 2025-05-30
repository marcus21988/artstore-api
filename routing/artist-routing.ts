import express from "express";
import artistController from "../controller/artist-controller";

const artistRouter = express.Router()

artistRouter.route('/')
.get(artistController.getAllArtists)
.post(artistController.createArtist)

artistRouter.route('/:id')
.get(artistController.getArtistById)

artistRouter.route('/:id/designs')
.get(artistController.getDesignByAuthorId)

artistRouter.route('/:fullName')
.put(artistController.updateArtist)
.delete(artistController.deleteArtist)

export default artistRouter