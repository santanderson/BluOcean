const router = require('express').Router()
const RegisterController = require('../controllers/auth/RegisterController')
const LoginController = require('../controllers/auth/LoginController')
const checkToken = require('../middlewares/login')
const cors = require('cors')

router.use(cors())

router.post('/register', RegisterController.create);
router.post('/login', LoginController.create);

//Private Routes
router.get('/user/:id', checkToken, LoginController.private)

module.exports = router;