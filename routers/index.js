const { Router } = require('express');
const countriesContoller = require('../controllers/countriesContoller')


const router = Router()


router.get('/:fullname', countriesContoller.getByName)


module.exports = router;