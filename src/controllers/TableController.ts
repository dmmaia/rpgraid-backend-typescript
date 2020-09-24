import { Request, response, Response } from "express";
import { ITable, Table } from '../models/Table';
import {uuid} from 'uuidv4';



class TableController {

    public async all(req: Request, res: Response): Promise<Response>{
        const { userId } = req.body;

        let table = await Table.find({userId});

        try {
            return response.status(200).json(table);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }

    public async store(req: Request, res: Response): Promise<Response>{
        const {tableName, userId, _id} = req.body;
        let table:ITable;

        if(_id){
            table = await Table.findById(_id)
        }

        if(userId && tableName){
            table = await Table.create({tableName,userId,_id:uuid()});
        }

        try {
            return res.status(201).json(table);
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}

export default new TableController()

/*module.exports = {
	async store(req, res){
        const {tableName,  UserId, _id, del } = req.body;

        let table = await Table.find({UserId});

        if(_id){
            table = await Table.findById(_id)
        }

        if((UserId && tableName)){
			table = await Table.create({tableName, UserId});
        }
		

		return res.json(table);
	}
};*/