import express, {Request, Response} from "express"
import designsController from "../controller/designs-controller"
import authMiddleware from "../middleware/auth-middleware"

const designsRouter = express.Router()

designsRouter.route('/')
.get(authMiddleware, designsController.getAllDesignsDetailed)
.post(designsController.createNewDesign)

designsRouter.route('/:id')
.get(designsController.getDesignById)
.put(designsController.updateDesign)
.delete(designsController.deleteDesign)


export default (designsRouter)