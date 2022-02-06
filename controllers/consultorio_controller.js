const { response, request } = require('express');


// GET
const getConsultorios = async ( req = request, res = response) => {

    try {

        let data = {
            msg: 'GET Consultorios - controlador'
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
const getConsultoriosById = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `GET Consultorio - controlador - ${ id }`
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
const postConsultorio = async ( req = request, res = response ) => {

    try {

        let data = {
            msg: `POST Consultorio - controlador`
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
const putConsultorio = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PUT Consultorio - controlador - ${ id }`
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
const patchConsultorio = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `PATCH Consultorio - controlador - ${ id }`
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
const deleteConsultorio = async ( req = request, res = response ) => {

    try {

        const { id } = req.params;

        let data = {
            msg: `DELETE Consultorio - controlador - ${ id }`
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
    getConsultorios,
    getConsultoriosById,
    postConsultorio,
    putConsultorio,
    patchConsultorio,
    deleteConsultorio
};