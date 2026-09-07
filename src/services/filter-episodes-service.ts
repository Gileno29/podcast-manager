import { IncomingMessage } from "http";
import {repositoryPodcast} from "../repository/podcastrepository.ts"

export const serviceFilterEpisodes = async (podcastName: IncomingMessage)=>{
    
    const queryString = podcastName.url?.split("?p=")[1] ?? "";

    if (podcastName.url?.split("?")[0]=="/api/episode" && queryString ===""){
        return []
    }
    const data = await repositoryPodcast(queryString);  
    
    return data;
}