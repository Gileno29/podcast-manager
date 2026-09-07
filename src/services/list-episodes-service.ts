import { FilterPodCastModel } from "../models/response-podcast-model.ts";
import {repositoryPodcast} from "../repository/podcastrepository.ts"
import { HTTPStatusCode } from "../utils/http-statuscode.ts";
export const serviceListEpisodes = async (): Promise<FilterPodCastModel>=>{
    const data = await repositoryPodcast()
       let responseFormat:FilterPodCastModel={
        statusCode:0,
        body:[],
    }

    if(data){
        responseFormat.statusCode = HTTPStatusCode.Ok
    }else{
        responseFormat.statusCode = HTTPStatusCode.NoContent

    }
    responseFormat.body= data

    return responseFormat

}

