import { Topic } from "./Topic"
import { UserModel } from "./UserModel"



export class Post{
  public id : number
  public title : string
  public text : string
  public data : Date
  public image : string
  public userModel : UserModel
  public topic : Topic
}
