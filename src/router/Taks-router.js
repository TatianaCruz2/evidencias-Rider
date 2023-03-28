import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask, getTask } from "../controllers/taks-controllers.js";

const router = Router();

router.get('/taks', getTasks)
router.post('/taks', createTask)
router.put('/taks/:id', updateTask)
router.delete('/taks/:id', deleteTask)
router.get('/taks/:id', getTask)
export default router;
