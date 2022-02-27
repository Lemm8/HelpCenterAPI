const { response, request } = require('express');

const Usuario = require('../models/usuario');
const Paciente = require('../models/paciente');

const { encriptarContrasena } = require('../helpers/encriptar');
const { findOneAndUpdate, findOne, findOneAndReplace, findOneAndRemove } = require('../models/usuario');

// GET
const getPacientes = async ( req = request, res = response) => {

    try {

        let page = 1;
        let itemsPerPage = 5;

        if ( req.query.page ) {
            page = Number( req.query.page );
        }

        if ( req.query.limit ) {
            itemsPerPage = Number( req.query.limit );
        }

        let query = {};

        let fields = ({ path: 'usuario',  select: [ 'correo', 'telefono' ] });

        let options = {
            page, 
            limit: itemsPerPage,
            populate: fields,
            sort: '_id',
            lean: false
        };
    

        Paciente.paginate( query, options, ( err, pacientes ) => {
            if ( err ) {
                console.log( err );
                return res.status( 500 ).send({
                    status: 500,
                    msg: 'Error en el servidor'
                });
            }
    
            if ( !pacientes ) return res.status( 404 ).send({
                status: 404,
                msg: 'No se han encontrado usuarios en la búsqueda'
            })
    
            let data = {
                pacientes: pacientes.docs,
                totalUsuarios: pacientes.total,
                currentPage: pacientes.page,
                totalPages: pacientes.pages
            }
    
            res.status( 200 ).send({
                status: 200,
                data
            });
    
        });        

    } catch ( error ) {
        
        return res.status( 500 ).json( {
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });        

    }  

}


// GET( ID )
const getPacientesById = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let fields = ( { path: 'usuario', select: [ 'correo', 'telefono' ] } );
    
        // BUSCAR PACIENTE
        const paciente = await Paciente.findOneById( id ).populate( fields );

        if ( !paciente ) {

            return res.status( 404 ).send({
                status: 404,
                msg: 'No se ha encontrado el id'
            });

        } else {

            return res.status( 200 ).send({
                status: 200,
                paciente
            });

        }  
        

    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });
             

    }  

}




// POST
const postPaciente = async ( req = request, res = response ) => {

    try {

        // OBTENER CAMPOS OBLIGATORIOS
        const { nombre, apellidos, telefono, correo, contrasena,  } = req.body;
        // INSTANCIA DEL MODELO USUARIO MONGOOSE
        const usuario = new Usuario({
            correo, 
            telefono
        });

        // ENCRIPTAR CONTRASEÑA 
        usuario.contrasena = encriptarContrasena( contrasena );


        // GUARDAR BD
        usuario.save( function( err ) {
            if ( err ) {
                return res.status( 500 ).send({
                    msg: "Ocurrió un error en el servidor, intente mas tarde",
                    error: err
                });
            }

            const paciente = new Paciente({
                "_id": usuario._id,
                nombre,
                apellidos,
                usuario
            });

            paciente.save( function ( err ) {
                if ( err ) {
                    res.status( 500 ).send({
                        msg: "Ocurrió un error en el servidor, intente mas tarde",
                        error: err
                    });
                    throw new Error( err );                    
                };
            });

            return res.status( 200 ).json( {
                nombre: paciente.nombre,
                apellidos: paciente.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono
            });
        });

    } catch ( error ) {
        
        return res.status( 500 ).json( {
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });

    }  

}




// PUT ( ID )
const putPaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        const { _id, correo, contrasena, ...info } = req.body;

        if ( contrasena ) {
            info.contrasena = encriptarContrasena( contrasena );
        }

        const paciente = await Paciente.findByIdAndReplace( id, { nombre: info.nombre, apellidos: info.apellidos } );

        const usuario = await Usuario.findByIdAndReplace( id, { contrasena: info.contrasena, telefono: info.telefono } );

        return res.status( 200 ).json({
            status: 200,
            msg: "Usuario actualizado",
            paciente: {
                nombre: paciente.nombre,
                apelliods: paciente.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono,                 
            }
        });

    } catch ( error ) {
        
        return res.status( 500 ).json( {
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });         

    }  

}





// PATCH ( ID )
const patchPaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        const { _id, correo, contrasena, ...info } = req.body;

        if ( contrasena ) {
            info.contrasena = encriptarContrasena( contrasena );
        }

        const paciente = await Paciente.findByIdAndUpdate( id, { nombre: info.nombre, apellidos: info.apellidos } );

        const usuario = await Usuario.findByIdAndUpdate( id, { contrasena: info.contrasena, telefono: info.telefono } );

        return res.status( 200 ).json({
            status: 200,
            msg: "Usuario actualizado",
            paciente: {
                nombre: paciente.nombre,
                apelliods: paciente.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono,                 
            }
        });

    } catch ( error ) {
        
        return res.status( 500 ).json( {
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });         

    }  

}



// DELETE ( ID )
const deletePaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;
        
        const paciente = await Paciente.findById( id );        

        const usuario = await Usuario.findByIdAndUpdate( paciente.usuario, { estado: false } );

        if ( !paciente || !usuario ) {

            return res.status( 404 ).send({
                status: 404,
                msg: "El usuario no se ha encontrado"
            });

        } 

        return res.status( 200 ).send({
            "msg": "paciente borrado",
            "paciente": {
                "nombre": paciente.nombre,
                "apellidos": paciente.apelldios,
                "correo": usuario.correo,
                "estado": usuario.estado
            }
        });

    } catch ( error ) {
        
        return res.status( 500 ).json( {
            msg: "Ocurrió un error en el servidor, intente mas tarde",
            error
        });

    }  

}




module.exports = {
    getPacientes,
    getPacientesById,
    postPaciente,
    putPaciente,
    patchPaciente,
    deletePaciente
};