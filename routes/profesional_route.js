const { Router } = require('express');
const { check } = require('express-validator');

const { getProfesionales,
        getProfesionalesById,
        postProfesional,
        putProfesional,
        patchProfesional,
        deleteProfesional } = require('../controllers/profesional_controller');


const router = Router();

router.get( '/',  getProfesionales );
router.get( '/:id', getProfesionalesById );
router.post( '/', postProfesional );
router.put( '/:id', putProfesional );
router.patch( '/:id', patchProfesional );
router.delete( '/:id', deleteProfesional );

module.exports = router;