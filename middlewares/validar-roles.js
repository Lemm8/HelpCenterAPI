const { response } = require('express');

const Admin = require('../models/admin');

const esAdmin = ( req, res = response, next ) => {

    if ( !req.usuario ) {
        return res.status( 500 ).json({
            status: 500,
            msg: 'Se quiere verificar el rol sin validar token'
        });
    }

    const { uid } = req.usuario;

    const admin = Admin.findById( uid );

    if ( !admin ) {
        return res.status( 401 ).json({
            status: 500,
            msg: 'Este usuario no es administrador'
        });
    }

    next();
}


const tieneRol = ( roles = [] ) => {

    return ( req, res = response, next ) => {
        
        try {

            const { uid } = req.usuario;
            let contador_roles = 0;

            if ( !req.usuario ) {
                return res.status( 500 ).json({
                    msg: 'El token no ha sido validado' 
                });
            }

            for( let i = 0; i < roles.length; i++ ) {
                if ( !roles[ i ].findById( uid ) ) {
                    contador_roles++;
                }
            }

            if ( contador_roles == roles.length ) {
                return res.status( 500 ).json({
                    msg: 'Este usuario no está autorizado para realizar esta acción' 
                });
            }

            next();

        } catch ( error ) {
            console.log( error );
            return res.status( 400 ).json({
                msg: 'El tipo de usuario no existe'
            });
        }

    }

}



module.exports = {
    esAdmin,
    tieneRol,
}