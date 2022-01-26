import { Post } from "./Post"

export class UserModel {
    public id : number
    public name : string
    public email : string
    public password : string
    public photo : string
    public tipo : string
    public post : Post[]
}
