const { Router } = require('express');
const countriesContoller = require('../controllers/countriesContoller')
const { validateInput, validateFilters } = require('../validations')

const router = Router()

router.get('/filter', validateFilters, countriesContoller.getFromList)

router.get('/:fullname', validateInput, countriesContoller.getByName)




module.exports = router;