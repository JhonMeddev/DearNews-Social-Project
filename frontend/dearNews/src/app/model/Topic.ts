import { Post } from "./Post"

export class Topic {

    public id : number
    public name : string
    public description: string
    public savePost : boolean
    public post : Post[]
}
