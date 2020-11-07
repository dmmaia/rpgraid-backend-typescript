import { Request, Response } from 'express';
import { User } from '../models/User';
import jwt from 'jsonwebtoken'

class SessionController{
  public async index(req: Request, res: Response): Promise<Response>{
    const { userName, password } = req.body
    
    let login = await User.findOne({userName, password});

    if(login){
      if (await User.findOne({ userName })) {
        try {
          login = await User.findOne({ userName, password })
          const auth = jwt.sign({ id: login._id }, 'secret', {
            expiresIn: 600000
          })
          return res.json({
            login,
            token: auth
          })
        } catch (error) {
          return res.status(401).json({ message: 'Senha incorreta' })
        }
      }else {
        return res.status(401).json({ message: 'Usuário não encontrado' })
      } 
    }else {
      return res.status(401).json({ message: 'Usuário ou senha não inseridos' })
    }
  }
}

export default new SessionController()