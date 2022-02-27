const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProfesionalSchema = Schema({

    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos son obligatorios' ]
    },

    area: {
        type: String,
        required: [ true, 'El área es obligatoria' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});


ProfesionalSchema.plugin( mongoosePaginate );

// RETORNAR Profesional SIN CONTRASEÑA
// ProfesionalSchema.methods.toJSON = function() {
//     // QUITAR CAMPOS A IGNORAR
//     const { __v, contrasena, ...profesional } = this.toObject();
//     return profesional;
// }


module.exports = model( 'Profesional', ProfesionalSchema );