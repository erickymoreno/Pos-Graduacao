import Curso from '../models/Curso.js'

const inserir = (req, res) => {

  try {
    
    const curso = new Curso({
      titulo: req.body.titulo,
      cargaHoraria: req.body.cargaHoraria,
      instrutor: req.body.instrutor,
      tags: req.body.tags
    })

    curso.save(result => {
      res.status(201)
      return res.send(result)
    })

  } catch (error) {
    res.status(500)
    return res.send(error)
  }
}

const listarTodos = (req, res) => {

  try {
    
    Curso.find().then((result) => {
     return res.status(200).send(result)
    })

  } catch (error) {
    res.status(500)
    return res.send(error.message)
  }
}

const cursoController = {
  inserir, listarTodos
}

export default cursoController