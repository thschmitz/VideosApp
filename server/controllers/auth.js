import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/User.js";

export const signup = async(req, res) => {

    try{
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password:hash}); // With the password bcrypted

        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        // todo
    }
}