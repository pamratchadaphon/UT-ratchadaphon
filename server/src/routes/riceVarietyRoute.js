const riceVariety = require('../controllers/riceVarietyController')
const router = require('express').Router()

router.post('/', riceVariety.upload, riceVariety.create)
router.get('/', riceVariety.index)
router.get('/:riceVariety_id', riceVariety.show)
router.put('/:riceVariety_id', riceVariety.update)
router.delete('/:riceVariety_id', riceVariety.delete)

module.exports = router