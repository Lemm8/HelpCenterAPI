const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos, validarJWT, tieneRol } = require('../middlewares');

const Paciente = require('../models/paciente');
const Admin = require('../models/admin');

const { validarContrasena,
        existeCorreo,
        existeIdPaciente,
        existeRol } = require( '../helpers/db-validators' );

const { getPacientes,
        getPacientesById,
        postPaciente,
        putPaciente,
        patchPaciente,
        deletePaciente } = require('../controllers/paciente_controller');




const router = Router();


router.get( '/', getPacientes );



router.get( '/:id', [
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id').custom( existeIdPaciente ),
    validarCampos
], getPacientesById );



router.post( '/', [
    check('nombre', 'El nombre es obligatorio').exists(),
    check('apellidos', 'El apellido es obligatorio').exists(),
    check('telefono', 'El telefono es obligatorio').exists(),
    check('rol').custom( existeRol ),
    check('contrasena').custom( validarContrasena ), 
    check('correo', 'El correo no es válido').isEmail(),
    check( 'correo' ).custom( existeCorreo ),
    validarCampos
], postPaciente );



router.put( '/:id', [
    check('nombre', 'El nombre es obligatorio').exists(),
    check('contrasena').custom( validarContrasena ), 
    check( 'id').custom( existeIdPaciente ),
    validarCampos
], putPaciente );



router.patch( '/:id', [
    check('nombre', 'El nombre es obligatorio').exists(),
    check('contrasena').custom( validarContrasena ), 
    check( 'id').custom( existeIdPaciente ),
    validarCampos
], patchPaciente );



router.delete( '/:id', [
    validarJWT,
    tieneRol( [ Paciente, Admin ] ),
    //esAdmin,
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id').custom( existeIdPaciente ),
    validarCampos
], deletePaciente );

module.exports = router;