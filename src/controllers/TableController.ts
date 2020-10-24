import { Request, Response } from "express";
import { ITable, Table } from '../models/Table';
import {uuid} from 'uuidv4';

class TableController {

    public async all(req: Request, res: Response): Promise<Response>{
        const userId  = req.params.userId;

        try {
            let table = await Table.find({userId:Object(userId)}); 
            return res.status(200).json(table);
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }

    public async findOne(req: Request, res: Response): Promise<Response>{
        const _id  = req.params.id;

        let table;
        try {
            table = await Table.findById({_id});
            table = table===null?ErrorEvent:table;
            return res.json(table)
        } catch (error) {
            return res.status(400).json({message: "Table not found"})
        }
    }

    public async store(req: Request, res: Response): Promise<Response>{
        const {tableName, userId} = req.body;
        let table:ITable;

        try { 
            if(userId && tableName){
                table = await Table.create({tableName,userId,_id:uuid()});
            }
            return res.status(201).json(table);
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const _id   = req.params.id;

        try {
            let tableDelete = await Table.deleteOne({ _id })
            return res.json(tableDelete);
        } catch (error) {
            return res.status(400).json({message: error.message || 'table not found'})
        }
        
    }
}

export default new TableController()