import {IncomingMessage, ServerResponse} from 'http'
import {serviceListEpisodes} from '../services/list-episodes-service.ts'
import { serviceFilterEpisodes } from '../services/filter-episodes-service.ts';
import { HTTPContent } from '../utils/http-content.ts';

const content = await serviceListEpisodes();
console.log(`this is my content ${content}`)
export const getListEpisodes=(req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(content.statusCode, {"Content-Type":HTTPContent.JSON});
    res.end(JSON.stringify(content.body));
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
)=>{

    const content = await serviceFilterEpisodes(req);


    res.writeHead(content.statusCode, {"content-Type": HTTPContent.JSON});

    res.end(JSON.stringify(content.body))

}
