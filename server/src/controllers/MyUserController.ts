import type { Request, Response } from "express";
import User from "../models/MyUser.ts";

export const createCurrentUser = async (req: Request, res: Response)=>{
    //check id user exists
    //craete if not
    //return user obj
    
    try {
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({
            auth0Id: auth0Id,
        });
        if(existingUser){
            res.status(200).json({message: "User already exists!"});
        }

        const newUser = new User(req.body);
        await newUser.save();
        //it converts the document(removes extra version number and info) into plain js obj
        res.status(201).json(newUser.toObject());


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error creating user"});
    }
}


