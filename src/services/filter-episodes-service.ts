import {repositoryPodcast} from "../repository/podcastrepository.ts"

export const serviceFilterEpisodes = async (podcastName: string)=>{
    const data = await repositoryPodcast(podcastName);  
    
    return data;
}