import { Request, Response } from "express";
import { User } from "../models/User";
import {uuid} from 'uuidv4';

export class UserController {
  async store(req: Request, res: Response): Promise<Response>{
    const { userName } = req.body;

    let user = await User.findOne({ userName });

    if(!user){
      user = await User.create({userName, _id:uuid()});
    }

   try {
    return res.status(201).json(user);
   } catch (err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.'
    })
   }
  }
}