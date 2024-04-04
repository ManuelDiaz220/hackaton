import { Server, ic } from 'azle';
import cors from "cors";
import express from 'express';
import mongoose from 'mongoose';
import { UserModel } from './models/user.model';
import UserController from './controllers/users.controllers';
import usersControllers from './controllers/users.controllers';

export default Server(() => {
    const app = express();
    mongoose.connect("mongodb+srv://Manu:12345@example.mvvzqcx.mongodb.net/?retryWrites=true&w=majority&appName=examplez").then(()=>{
        console.log("Conexion hecha")
    }).catch(err=>{
        console.log("Error:",err)
    })    


    app.use(cors());
    app.use(express.json());

    // app.use((req, res, next) => {
    //     if (ic.caller().isAnonymous()) {
    //         res.status(401);
    //         res.send();
    //     } else {
    //         next();
    //     }
    // });

    app.post('/api/create',UserController.create);

    app.get('/api/get',usersControllers.get)


    app.post('/test', (req, res) => {
        res.json(req.body);
    });

    app.get('/whoami', (req, res) => {
        res.statusCode = 200;
        res.send(ic.caller());
    });

    app.get('/health', (req, res) => {
        res.send().statusCode = 204;
    });

    return app.listen();
});
