const { Router } = require('express');
const countriesContoller = require('../controllers/countriesContoller')
const machinesContoller = require('../controllers/machinesController')
const { validateInput, validateFilters } = require('../validations');
const { catchErrors } = require('../handlers/errorHandlers')

const router = Router()

router.get('/all', countriesContoller.getAll)

router.get('/spin', machinesContoller.slotMachine)

router.get('/filter', validateFilters, countriesContoller.getFromList)

router.get('/:fullname', validateInput, catchErrors(countriesContoller.getByName))




module.exports = router;