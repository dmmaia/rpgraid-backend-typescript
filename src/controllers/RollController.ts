import { Request, Response } from 'express';
import { Roll } from '../models/Roll';


class RollController{
  public async create(req: Request, res: Response): Promise<Response>{
    const { userId, tableId, roll } = req.body

    try {
      const newRoll = await Roll.create({userId, tableId, roll})
      return res.json(newRoll).status(201);
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