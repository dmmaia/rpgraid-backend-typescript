import jwt from 'jsonwebtoken'
import { promisify } from 'util'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'Nenhum token fornecido' })
  }

  try {
    await promisify(jwt.verify)(authHeader, 'secret')
    return next()
  } catch (err) {
    return res.status(401).send({ error: 'Token inválido' })
  }
}
