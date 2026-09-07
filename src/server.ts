import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.port
server.listen(port, ()=>{
    console.log(`server iniciou na porta ${port}`)
    
})