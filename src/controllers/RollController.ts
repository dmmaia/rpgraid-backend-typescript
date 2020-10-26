import { Request, Response } from 'express';
import { Roll } from '../models/Roll';
import { User } from '../models/User';
import { Table } from '../models/Table';


class RollController{
  public async create(req: Request, res: Response): Promise<Response>{
    const { userId, tableId, roll } = req.body

    try {
      const findIfUserExists = await User.findById({_id:userId});
      const findIfTableExists = await Table.findById({_id:tableId});

      if(findIfUserExists===null||findIfTableExists===null){
        return res.json({message:"User not found"}).status(400);
      }else{
        const newRoll = await Roll.create({userId, tableId, roll})
        return res.json(newRoll).status(201);
      }    
    } catch (error) {
      
    }
  }

  public async all(req: Request, res:Response): Promise<Response>{
    const tableId = req.params.tableId

    try {
      const rolls = await Roll.find({tableId});
      return res.json(rolls);
    } catch (error) {
      return res.json({message : error.message||'Unexpected error'})
    }
  }
}

export default new RollController;