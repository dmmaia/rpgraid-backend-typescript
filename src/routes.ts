import { Router } from "express";

import authMiddleware from './middlewares/authorizathion'

import TableController from "./controllers/TableController";
import UserController from "./controllers/UserController";
import RollController from './controllers/RollController';
import SessionController from './controllers/SessionController';

const router = Router()

router.post('/users', UserController.store);
router.post('/sessions', SessionController.index);
router.use(authMiddleware);
router.get('/users', UserController.findOne);
router.delete('/users/:id', UserController.delete);

router.get('/tables/all/:userId', TableController.all);
router.get('/tables/:id', TableController.findOne);
router.post('/tables', TableController.store);
router.delete('/tables/:id', TableController.delete);

router.get('/rolls/all/:tableId', RollController.all);
router.post('/rolls', RollController.create);


export { router }