import {Server} from "http";
import { app } from "./app";
import dotenv from "dotenv";
import seedAdmin from "./app/utils/seedAdmin";
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

 

 (async () => {
  await runServer();
  await seedAdmin();
})();

