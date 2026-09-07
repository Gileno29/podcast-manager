import { IncomingMessage } from "http";
import {repositoryPodcast} from "../repository/podcastrepository.ts"
import { FilterPodCastModel } from "../models/response-podcast-model.ts";
import { HTTPStatusCode } from "../utils/http-statuscode.ts";

export const serviceFilterEpisodes = async (podcastName: IncomingMessage):Promise<FilterPodCastModel>=>{

    let responseFormat:FilterPodCastModel={
        statusCode:0,
        body:[],
    }
    
    const queryString = podcastName.url?.split("?p=")[1] ?? "";

    const data = await repositoryPodcast(queryString);  

    //verificar conteudo
    if(data.length!==0){
        responseFormat.statusCode = HTTPStatusCode.Ok
    }else{
        responseFormat.statusCode = HTTPStatusCode.NoContent

    }
    responseFormat.body= data
    
    return responseFormat;
}