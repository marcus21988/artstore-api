import lodash from "lodash"
import fs from "fs"
import express, {Response, Request} from "express"
import designsRouter from "./routing/designs-routing"

const app = express ()
const router = express.Router()



app.use(designsRouter)

app.listen(4000, () => {
    console.log('Server is listening at the port 4000')
})