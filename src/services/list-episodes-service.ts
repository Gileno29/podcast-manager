import {repositoryPodcast} from "../repository/podcastrepository.ts"
export const serviceListEpisodes = async ()=>{
    const data = await repositoryPodcast()

    return data

}

