const { response, request } = require('express');


// GET
const getPacientes = async ( req = request, res = response) => {

    try {

        let data = {
            msg: 'GET Pacientes - controlador'
        }
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }  

}


// GET( ID )
const getPacientesById = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `GET Paciente - controlador - ${ id }`
        };
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }  

}




// POST
const postPaciente = async ( req = request, res = response ) => {

    try {

        let data = {
            msg: `POST Paciente - controlador`
        };
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }  

}




// PUT ( ID )
const putPaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PUT Paciente - controlador - ${ id }`
        };
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }  

}





// PATCH ( ID )
const patchPaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PATCH Paciente - controlador - ${ id }`
        };
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }  

}



// DELETE ( ID )
const deletePaciente = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `DELETE Paciente - controlador - ${ id }`
        };
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

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