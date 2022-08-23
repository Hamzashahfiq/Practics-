const router = require('express').Router();
const ProductsController = require('../products/ProductsController')
const authUtil = require('../../utils/Auth')

router.post('/addProduct',ProductsController.addProduct);
router.get('/getProduct',ProductsController.getProduct);

module.exports = router;