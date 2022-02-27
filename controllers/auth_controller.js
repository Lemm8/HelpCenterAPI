const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');

// LOGIN
const login = async( req = request, res = response ) => {

    const { correo, contrasena } = req.body;

    try {

        // VERIFICAR CORREO
        const usuario = await Usuario.findOne( { correo } );
        if ( !usuario ) {
            return res.status( 400 ).json({
                msg: "El usuario o la contraseña no son correctos, vuelva a intentar"
            });
        }

        // VERIFICAR SI ESTA ACTIVO EL USUARIO
        if ( !usuario.estado ) {
            return res.status( 400 ).json({
                msg: "El usuario o la contraseña no son correctos, vuelva a intentar"
            });

        }

        // VERIFICAR LA CONTRASEÑA
        const validar = bcryptjs.compareSync( contrasena, usuario.contrasena );
        if ( !validar ) {
            return res.status( 400 ).json({
                msg: "El usuario o la contraseña no son correctos, vuelva a intentar"
            });
        }


        // GENERAR JWT
        const token = await generarJWT( usuario.id );


        return res.status( 200 ).json({
            usuario,
            token
        })

    } catch ( error ) {        
        return res.status( 500 ).json( {
            msg: "Problema en el servidor",
            error
        });
    }

}


module.exports = {
    login
}

