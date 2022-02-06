const { Router } = require('express');
const { check } = require('express-validator');

const { getConsultorios,
        getConsultoriosById,
        postConsultorio,
        putConsultorio,
        patchConsultorio,
        deleteConsultorio } = require('../controllers/consultorio_controller');


const router = Router();

router.get( '/',  getConsultorios );
router.get( '/:id', getConsultoriosById );
router.post( '/', postConsultorio );
router.put( '/:id', putConsultorio );
router.patch( '/:id', patchConsultorio );
router.delete( '/:id', deleteConsultorio );

module.exports = router;