import type { Request, Response } from "express";
import User from "../models/MyUser.js";

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
export const updateCurrentuser = async(req: Request, res:Response)=>{
    try {
        const {name, addressLine1,city, country} = req.body;
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({message: "User doesn't exist"});
        }
        user.name = name,
        user.addressLine1 = addressLine1,
        user.city = city,
        user.country = country,

        await user.save();
        res.status(200).send(user);
        // res.status(200).json({message:"User updated successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error updating user"});
    }
}

export const getCurrentUser = async(req: Request, res: Response)=>{
    try {
        const currentUser = await User.findOne({ _id: req.userId});
        if(!currentUser){
            return res.status(404).json({message: "User not found"});
        }
        res.json(currentUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
}


