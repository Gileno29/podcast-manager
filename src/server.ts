import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller.ts'
import {Routes} from "./routes/routes.ts"
import { HTTPMethod } from "./utils/http-methods.ts";


const server = http.createServer(async(req: http.IncomingMessage, res: http.ServerResponse)=>{
    
    //queryString
    const[baseUrl,queryString] = req.url?.split("?") ??["",""]
    
    if(req.method===HTTPMethod.GET && baseUrl===Routes.LIST){
        await getListEpisodes(req, res);
    }

    if(req.method===HTTPMethod.GET && baseUrl===Routes.EPISODE){
        await getFilterEpisodes(req, res)
    }
});

const port = process.env.port
server.listen(port, ()=>{
    console.log(`server iniciou na porta ${port}`)
    
})