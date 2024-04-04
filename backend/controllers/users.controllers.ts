import { UserModel } from "../models/user.model";

export default {
    create:async (req:any,res:any)=>{
        try {
        const user = req.body;
        await UserModel.create(user);
        res.status(200).json({msg:"informacion guardada con exito"});
        return;
        } catch (error) {
            res.status(500).json({msg:"tienes un error"});
            return;
        }
    },
    get:async (req:any,res:any)=>{
        try {
        const users = await UserModel.find();
        res.status(200).json(users);
        } catch (error) {
            res.status(500).json({msg:"tienes un error"});
            return;
        }
    }
}