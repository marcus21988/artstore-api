import express from "express"
import designsRouter from "./routing/designs-routing"
import "reflect-metadata"
import dbConnection from "./common/db-connection"
import artistRouter from "./routing/artist-routing"

const app = express ()

app.use(express.json())

app.use('/artists', artistRouter)
app.use('/designs', designsRouter)

app.listen(4000, () => {
    console.log('Server is listening at the port 4000')
})

dbConnection.initialize().then(()=>{
    console.log("Connected to DB")
}).catch((err:any)=>{console.log(err)})