
const Router = require('express')
const router = new Router();
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole("USER"),basketController.create)
router.get('/',checkRole("USER"),basketController.getAll)
router.get('/:id',checkRole("USER"),basketController.getOne)
router.delete('/delete',checkRole("USER"),basketController.delete)


module.exports = router