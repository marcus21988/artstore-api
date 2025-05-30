import express from "express";
import artistController from "../controller/artist-controller";

const artistRouter = express.Router()

artistRouter.route('/').get(artistController.getAllArtists)

artistRouter.route('/:id').get(artistController.getArtistById)

export default artistRouter