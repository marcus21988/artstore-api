import express from "express"
import designsRouter from "./routing/designs-routing"
import "reflect-metadata"
import dbConnection from "./common/db-connection"
import artistRouter from "./routing/artist-routing"
import cors from "cors"
import additionalRouter from "./routing/additional-router"
import path from "path"
import fileUploadRouter from "./common/file-upload"
import userController from "./controller/user-controller"
import userRouter from "./routing/user-routing"


const app = express ()

app.use(express.json())
app.use(cors())
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
// console.log(__dirname)

app.use('/artists', artistRouter)
app.use('/designs', designsRouter)
app.use('/additional', additionalRouter)
app.use(fileUploadRouter)
app.use(userRouter)

app.listen(4000, () => {
    console.log('Server is listening at the port 4000')
})

dbConnection.initialize().then(()=>{
    console.log("Connected to DB")
}).catch((err:any)=>{console.log(err)})