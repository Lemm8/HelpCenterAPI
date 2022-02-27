const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsuarioSchema = Schema({

    correo: {
        type: String,
        required: [ true, 'El correo es obligatorio' ],
        unique: true
    },

    contrasena: {
        type: String,
        required: [ true, 'La contraseña es obligatoria' ]
    },

    telefono: {
        type: String,
        requires: [ true, 'El teléfono es obligatorio' ]
    },

    // rol: {
    //     type: String,
    //     enum: [ 'usuario', 'admin' ],
    //     default: 'usuario'
    // },

    estado: {
        type: Boolean,
        default: true
    }

});


UsuarioSchema.plugin( mongoosePaginate );

// RETORNAR USUARIO SIN CONTRASEÑA
UsuarioSchema.methods.toJSON = function() {
    // QUITAR CAMPOS A IGNORAR
    const { __v, contrasena, _id, id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}


module.exports = model( 'Usuario', UsuarioSchema );