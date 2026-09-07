import * as http from "http";
import { getListEpisodes } from './controllers/podcasts-controller.ts'


const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
    if(req.method==="GET"){
        getListEpisodes(req, res);
    }
});

const port = process.env.port
server.listen(port, ()=>{
    console.log(`server iniciou na porta ${port}`)
    
})