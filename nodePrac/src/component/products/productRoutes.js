const router = require('express').Router();
const productController = require('./productController')

router.get('/getProducts', productController.getProducts)
router.post('/addProduct', productController.addProduct)
router.put('/updateProduct/:id', productController.updateProduct)
router.delete('/deleteProduct', productController.deleteProduct)


module.exports = router