const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AdminSchema = Schema({

    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos son obligatorios' ]
    },

    direccion: {
        type: String,
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});


AdminSchema.plugin( mongoosePaginate );

// RETORNAR Paciente SIN ID
AdminSchema.methods.toJSON = function() {
    // QUITAR CAMPOS A IGNORAR
    const { __v, _id, id, ...admin } = this.toObject();
    return admin;
}


module.exports = model( 'Admin', AdminSchema );