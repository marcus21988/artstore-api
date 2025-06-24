import express from "express";
import additionalController from "../controller/additional-controller";

const additionalRouter = express.Router()

additionalRouter.route('/formats').get(additionalController.getFormats)
additionalRouter.route('/states').get(additionalController.getStates)
additionalRouter.route('/articles').get(additionalController.getArticles)
additionalRouter.route('/sizes').get(additionalController.getSizes)
additionalRouter.route('/artists').get(additionalController.getArtists)

export default additionalRouter