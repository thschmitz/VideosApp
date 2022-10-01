import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { createError } from "../error.js";
import User from "../models/User.js";

export const signup = async(req, res, next) => {

    try{
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password:hash}); // With the password bcrypted

        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        // todo
        next(createError(404, "Already has another user with this email"))
    }
}

export const signin = async(req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) return next(createError(404, "User not found!"));
    
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
    
        if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
    
        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_KEY);
        const { password, ...others } = user._doc;
    
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
    } catch (err) {
    next(err);
    }
}