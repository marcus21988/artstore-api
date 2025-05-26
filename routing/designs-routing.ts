import express, {Request, Response} from "express"
import designsController from "../controller/designs-controller"
const designsRouter = express.Router()

designsRouter.route('/')
.get(designsController.getAllDesigns)
.post(designsController.createNewDesign)

designsRouter.route('/:id')
.get(designsController.getDesignById)
.put(designsController.updateDesign)
.delete(designsController.deleteDesign)


export default (designsRouter)