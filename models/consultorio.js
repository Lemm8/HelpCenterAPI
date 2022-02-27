const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ConsultorioSchema = Schema({

    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio' ]
    },

    dirección: {
        type: String,
        required: [ true, 'Los apellidos son obligatorios' ]
    },

    imagen: {
        type: String
    },

    ubicacion: {
        type: String,
        required: [ true, 'La ubicación es obligatoria' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});


ConsultorioSchema.plugin( mongoosePaginate );

// RETORNAR Consultorio SIN CONTRASEÑA
// ConsultorioSchema.methods.toJSON = function() {
//     // QUITAR CAMPOS A IGNORAR
//     const { __v, contrasena, ...consultorio } = this.toObject();
//     return consultorio;
// }


module.exports = model( 'Consultorio', ConsultorioSchema );