const { response, request } = require('express');


// GET
const getProfesionales = async ( req = request, res = response) => {

    try {

        let data = {
            msg: 'GET Profesionales - controlador'
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
const getProfesionalesById = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `GET Profesional - controlador - ${ id }`
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
const postProfesional = async ( req = request, res = response ) => {

    try {

        let data = {
            msg: `POST Profesional - controlador`
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
const putProfesional = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PUT Profesional - controlador - ${ id }`
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
const patchProfesional = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PATCH Profesional - controlador - ${ id }`
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
const deleteProfesional = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `DELETE Profesional - controlador - ${ id }`
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
    getProfesionales,
    getProfesionalesById,
    postProfesional,
    putProfesional,
    patchProfesional,
    deleteProfesional
};