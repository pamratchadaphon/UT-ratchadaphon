const incomeExpense = require('../controllers/incomeExpenseController')
const router = require('express').Router()

router.post('/', incomeExpense.create)
router.get('/', incomeExpense.index)
router.get('/:income_expense_id', incomeExpense.show)
router.put('/:income_expense_id', incomeExpense.update)
router.delete('/:income_expense_id', incomeExpense.delete)
router.get('/farmer/:income_expense_id', incomeExpense.farmer)


module.exports = router