import { proyecto } from "../models/proyecto.js";
import { Taks } from '../models/Taks.js';
export const getproyecto = async (req, res) => {
    try {
        const proyect = await proyecto.findAll()
        res.json(proyect)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
export const getproject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await proyecto.findOne({
            where: {
                id
            },
        });
        if (!project)
            return res.status(404).json({ message: "project does not exists" });
        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const crearproyecto = async (req, res) => {
    try {
        const { name, priority, description} = req.body

        // const { id } = res.params
        const newproyect = await proyecto.create({
            name,
            description,
            priority,
          
        });
        res.status(200).json({
            menssagger: 'recurso creado con exito', newproyect
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateproyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description, estado } = req.body
        const proyect = await proyecto.findByPk(id);
        proyect.name = name;
        proyect.priority = priority;
        proyect.description = description;
        proyect.estado = estado;
        await proyect.save()
        res.json(proyect)
        //res.status(200).json({message:'se ha actualizado el proyecto correctamente', data:proyect})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteproyect = async (req, res) => {
    try {
        const { id } = req.params;
        await proyecto.destroy({
            where: {
                id,
            }

        })
        res.sendStatus(204);//.json({message:'proyecto eliminado correctamente', id})
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
export const getProjectTasks = async (req, res) => {
    const { id } = req.params;
    const tasks = await Taks.findAll({
        where: { projectId: id },
    });
    res.json(tasks)
}

