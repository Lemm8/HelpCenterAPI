const cors = require('cors');
const express = require('express');

const { dbConnection } = require('../database/config');

// CLASE SERVIDOR
class Servidor {

    constructor() {

        // CUANDO SE INSTANCIE EL SERVIDOR, CREAR APP DE EXPRESS COMO PROPIEDAD
        this.app = express();
        // PUERTO
        this.port = process.env.PORT;
        // RUTAS
        this.homePath           = '/api';
        this.pacientesPath      = '/api/pacientes';
        this.profesionalesPath  = '/api/profesionales';
        this.consultoriosPath   = '/api/consultorios';
        this.authPath           = '/api/auth';

        // CONEXIÓN CON BD
        this.conectarDB();

        // MIDDLEWARES (FUNCIONES QUE AÑADEN FUNCIONACLIDADES AL SERVER, SE EJCUTAN SIEMPRE QUE SE LEVANTE EL SERVER)
        this.middlewares();

        // ESTABLECER RUTAS
        this.routes();

    }


    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );
        // PARSEO Y LECTURA DEL BODY
        this.app.use( express.json() );

    }


    // RUTAS DEL SERVIDOR
    routes() {

        this.app.use( this.homePath, require( '../routes/home_route' ) );
        this.app.use( this.pacientesPath, require( '../routes/paciente_route' ) );        
        this.app.use( this.profesionalesPath, require( '../routes/profesional_route' ) );        
        this.app.use( this.consultoriosPath, require( '../routes/consultorio_route' ) );   
        this.app.use( this.authPath, require( '../routes/auth_route' ) );   

    }
    



    // ESTABLECER PUERTO DONDE SE VA A ESUCHAR
    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en el puerto ', this.port );
        });
    }


}

module.exports = Servidor;