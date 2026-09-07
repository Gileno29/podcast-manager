import {IncomingMessage, ServerResponse} from 'http'

export const getListEpisodes=(req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(200, {"Content-Type":"application/json"});

    res.end(JSON.stringify({
        name: "gileno",
    })
);
};

