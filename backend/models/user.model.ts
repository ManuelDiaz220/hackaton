import { Schema,model } from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    } 
});

export const UserModel = model('users',userSchema);