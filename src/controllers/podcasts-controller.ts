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

    const content = await serviceFilterEpisodes(req);


    res.writeHead(200, {"content-Type": "application/json"});

    res.end(JSON.stringify(content))

}
