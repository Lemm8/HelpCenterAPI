const { Router } = require('express');
const { check } = require('express-validator');

const { home } = require('../controllers/home_controller');


const router = Router();

router.get( '/',  home);

module.exports = router;