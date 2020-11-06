import { Request, Response } from 'express';
import { User } from '../models/User';
var jwt = require('jsonwebtoken');

class SessionController{
  public async index(req: Request, res: Response): Promise<Response>{
    const { userName, password } = req.body
    
    const checkIfUserExists = User.findOne({userName, password});

    if(checkIfUserExists){

    }
  }
}