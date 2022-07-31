const router = require('express').Router();
const AuthController = require('./AuthController');

router.post('/addUser',AuthController.addUser)



module.exports = router