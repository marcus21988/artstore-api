import express, {Request, Response} from "express"

const designsRouter = express.Router()

designsRouter.get('/designs',  (req:Request, res:Response) => {
    res.send({msg:'Getting all designs'})
})

designsRouter.get('design/:id', (req:Request, res:Response) => {
    const id = req.params.id;
    res.send({msg:`Getting a design with the ID: ${id}`})
})

designsRouter.post('/design', (req:Request, res:Response) => {
    res.send({msg:"Creating a new design"})
})

export default (designsRouter)