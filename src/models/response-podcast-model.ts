import Podcast from "./podcast-model";

export interface FilterPodCastModel{
    statusCode: number,
    body:Podcast[]
}