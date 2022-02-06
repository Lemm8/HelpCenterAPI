const { Router } = require('express');
const { check } = require('express-validator');

const { getPacientes,
        getPacientesById,
        postPaciente,
        putPaciente,
        patchPaciente,
        deletePaciente } = require('../controllers/paciente_controller');


const router = Router();

router.get( '/',  getPacientes );
router.get( '/:id', getPacientesById );
router.post( '/', postPaciente );
router.put( '/:id', putPaciente );
router.patch( '/:id', patchPaciente );
router.delete( '/:id', deletePaciente );

module.exports = router;