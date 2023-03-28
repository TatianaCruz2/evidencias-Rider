import { Router } from "express";
import {getproyecto,crearproyecto,updateproyecto,deleteproyect, getproject,getProjectTasks} from "../controllers/proyecto-controller.js";
const router = Router()

router.get('/proyect', getproyecto);
router.post('/proyect', crearproyecto);
router.put('/proyect/:id', updateproyecto);
router.delete('/proyect/:id', deleteproyect);
router.get('/proyect/:id', getproject);
//relaciones
router.get('/proyect/:id/taks', getProjectTasks);



export default router;