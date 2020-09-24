import { Router } from "express";
import TableController from "./controllers/TableController";
import  UserController from "./controllers/UserController";

const router = Router()

router.post('/users', UserController.store);

router.post('/tables', TableController.store);
router.get('/tables', TableController.all);

export { router }