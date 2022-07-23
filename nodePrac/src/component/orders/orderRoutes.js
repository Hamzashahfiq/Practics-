const router = require('express').Router();
const orderController = require('./orderController')

router.get('/getOrders', orderController.getOrders)
router.post('/addOrder', orderController.addOrder)
router.put('/updateOrder/:id', orderController.updateOrder)
router.delete('/deleteOrder', orderController.deleteOrder)


module.exports = router;