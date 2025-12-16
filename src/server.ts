import {Server} from "http";
import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

async function runServer(){
    let server:Server;

    try {
        server= app.listen(process.env.PORT,()=>{
            console.log(`the server is running on port | ${process.env.PORT}`)
        })
    } catch (error) {
        
    }
}

 runServer()

