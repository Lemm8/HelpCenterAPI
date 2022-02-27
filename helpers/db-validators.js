const Usuario = require('../models/usuario');
const Paciente = require('../models/paciente');
const Profesional = require('../models/profesional');
const Consultorio = require('../models/consultorio');



const validarContrasena = async ( contrasena = '' ) => {
    
    const valida = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#.?&])[A-Za-z\d@$!%*#.?&]{8,}$/.test( contrasena );
    if ( !valida ) {
        throw new Error( 'La contraseña debe tener mínimo 8 caractéres, mínimo 1 mayúscula, mínimo 1 minúscula y 1 caractér especial' );
    }

};

// VERIFICAR SI EL CORREO EXISTE
const existeCorreo = async( correo = '' ) => {
    const existeCorreo = await Usuario.findOne({ correo })
    if ( existeCorreo ) {
        throw new Error( `Ya hay una cuenta registrada con este correo: '${ correo }'` );
    }
};



// VERIFICAR SI EL ID EXISTE
const existeIdPaciente = async( id ) => {    
    const existeUsuario = await Paciente.find( { _id: id } );
    if ( existeUsuario.length == 0 ) {
        throw new Error( `El id: '${ id }' no existe` );
    }
};
const existeIdConsultorio = async( id ) => {    
    const existeUsuario = await Consultorio.find( { _id: id } );
    if ( existeUsuario.length == 0 ) {
        throw new Error( `El id: '${ id }' no existe` );
    }
};
const existeIdProfesional = async( id ) => {    
    const existeUsuario = await Profesional.find( { _id: id } );
    if ( existeUsuario.length == 0 ) {
        throw new Error( `El id: '${ id }' no existe` );
    }
};

// const existeRol = async( rol ) => {
//     if( rol !== 'usuario' && rol !== 'admin' ) {
//         throw new Error( `El rol ${ rol } no existe` );
//     }
// }

module.exports = {
    validarContrasena,
    existeCorreo,
    existeIdPaciente,
    existeIdConsultorio,
    existeIdProfesional,
    // existeRol
}