import mongoose from "mongoose";

const CursoSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    },
    cargaHoraria: {
      type: Number,
      required: true,
    },
    instrutor: {
      type: String,
      required: false,      
    },
    tags: [{
      type: String
    }]
})

const Curso = mongoose.model('Cursos', CursoSchema)

export default Curso