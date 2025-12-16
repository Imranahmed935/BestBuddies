import express, { Application } from "express"
import cors from "cors"
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import cookieParser from "cookie-parser";
import router from "./app/routes/routes";

export const app : Application = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1", router);


app.get("/", (req, res)=>{
    res.send("The server is running")
})

app.use(globalErrorHandler)
app.use(notFound)

