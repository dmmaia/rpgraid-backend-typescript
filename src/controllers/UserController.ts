import { Request, Response } from "express";
import { User } from "../models/User";
import { Table } from '../models/Table';
import {uuid} from 'uuidv4';

class UserController {
  public async findOne(req: Request, res: Response): Promise<Response>{
    const id = req.query.id;
    const userName = req.query.userName;

    let user;
    if(id && !userName){
      user = await User.findById({_id:id})
    }else{
      user = await User.findOne({userName:String(userName)})
    }

    return res.json(user).status(201);
  }

  public async store(req: Request, res: Response): Promise<Response>{
    const { userName, password } = req.body;

    let user = await User.findOne({ userName});

    try {
      if(!user){
        user = await User.create({userName, password, _id:uuid()});
        return res.status(201).json(user);
      }else{
        return res.status(400).json({message: "User name already exists"})
      }
      
   } catch (err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.'
    })
   }
  }

  public async delete(req: Request, res: Response): Promise<Response>{
    const _id = req.params.id;

    let userDelete;

    try {
      userDelete = await User.deleteOne({_id});
      userDelete = userDelete===null?ErrorEvent:userDelete;
      const tableDelete = await Table.deleteMany({userId:_id});

      return res.json(userDelete).json(tableDelete);
    } catch (error) {
      return res.status(400).json({message: "User not found"});
    }
  }
}

export default new UserController()