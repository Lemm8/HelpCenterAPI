const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PacienteSchema = Schema({

    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos son obligatorios' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});


PacienteSchema.plugin( mongoosePaginate );

// RETORNAR Paciente SIN ID
PacienteSchema.methods.toJSON = function() {
    // QUITAR CAMPOS A IGNORAR
    const { __v, _id, id, ...paciente } = this.toObject();
    return paciente;
}


module.exports = model( 'Paciente', PacienteSchema );