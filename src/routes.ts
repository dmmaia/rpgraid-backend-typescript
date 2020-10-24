import { Router } from "express";
import TableController from "./controllers/TableController";
import  UserController from "./controllers/UserController";

const router = Router()

router.get('/users', UserController.findOne);
router.post('/users', UserController.store);
router.delete('/users/:id', UserController.delete);

router.get('/tables/all/:userId', TableController.all);
router.get('/tables/:id', TableController.findOne);
router.post('/tables', TableController.store);
router.delete('/tables/:id', TableController.delete);


export { router }