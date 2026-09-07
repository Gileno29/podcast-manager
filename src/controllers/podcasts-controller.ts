import {IncomingMessage, ServerResponse} from 'http'
import {serviceListEpisodes} from '../services/list-episodes-service.ts'
import { serviceFilterEpisodes } from '../services/filter-episodes-service.ts';

const content = await serviceListEpisodes();
console.log(`this is my content ${content}`)
export const getListEpisodes=(req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
)=>{
    const queryString = req.url?.split("?p=")[1] ?? "";

    const content = await serviceFilterEpisodes(queryString);


    res.writeHead(200, {"content-Type": "application/json"});

    res.end(JSON.stringify(content))

}

