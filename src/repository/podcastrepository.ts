import fs from "fs";
import path from "path";
import Podcast from "../models/podcast-model.ts"
const pathData= path.join(import.meta.dirname,"podcasts.json")



export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const data= fs.readFileSync(pathData, "utf-8")
    console.log(data)
    let jsonFile = JSON.parse(data)

    if (podcastName){
        jsonFile = jsonFile.filter((podcast:Podcast)=> podcast.podcastName===podcastName)
    }

    return jsonFile
}