const { response, request } = require('express');


const home = ( req = request, res = response) => {

    try {

        let data = {
            fecha: new Date(),
            mensaje: 'Bienvenido a la api de Help Center, donde podrás obtener la información y citas de tus hospitales más cercanos',
            pacientes: '/api/pacientes',
            profesionales: '/api/profesional',
            consultorios: '/api/consultorios',        
        }
    
        res.status( 200 ).json( data );

    } catch ( error ) {
        
        res.status( 500 ).json( {
            error: "Ocurrió un error en el servidor, intente mas tarde"
        });
        throw new Error( error );        

    }
    

}

module.exports = {
    home
}