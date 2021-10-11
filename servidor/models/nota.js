import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const notaSchema = new Schema({
 NombreProp: {type: String, required: [true, 'Nombre obligatorio']},
 NombreMasc: {type: String, required: [true, 'Nombre_obligatorio']},
 EdadMasc: String,
 Direccion: String,
 Correo: String,
 Celular: String,
 usuarioId: String,
 //date:{type: Date, default: Date.now},
 //activo: {type: Boolean, default: true}
});

// Convertir a modelo

const Nota = mongoose.model('Nota', notaSchema);
export default Nota;

