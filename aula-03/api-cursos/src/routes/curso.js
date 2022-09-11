import { Router } from "express";
import cursoController from "../controllers/curso.js";

const cursoRouter = Router()

cursoRouter.post('/api/cursos', cursoController.inserir)
cursoRouter.get('/api/cursos', cursoController.listarTodos)

export default cursoRouter