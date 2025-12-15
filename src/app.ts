import express, { Application } from "express"
import cors from "cors"

export const app : Application = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("The server is running")
})

