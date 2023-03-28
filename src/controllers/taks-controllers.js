import {Taks} from "../models/Taks.js"
export const getTasks = async (req, res)=>{
    try {
        const tasks = await Taks.findAll();
        res.json(tasks);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createTask = async (req, res)=>{
   try {
    const {name, done, projectId} = req.body
    const newTaks = await Taks.create({
        name,
        done,
        projectId
    })
    res.json(newTaks)
    
   } catch (error) {
    return res.status(500).json({message: error.message});
   }
}
export const getTask = async (req, res)=>{
    const {id} = req.params
    try {
     const taks = await Taks.findOne({
        where:{id},
     })
     res.json(taks)
     
    } catch (error) {
     return res.status(500).json({message: error.message});
    }
 }
 export const updateTask = async (req, res)=>{
    const {id} = req.params;
    try {
        const taks = await Taks.findOne({
            where:{id},
        });
        taks.set(req.body);
        await taks.save();
        return res.json(taks);
     
    } catch (error) {
     return res.status(500).json({message: error.message});
    }
 }
 export const deleteTask = async (req, res)=>{
    const {id} = req.params;
    try {
     const result = await Taks.destroy({
        where: {id}
     })
     return res.sendStatus(204)
     
    } catch (error) {
     return res.status(500).json({message: error.message});
    }
 }