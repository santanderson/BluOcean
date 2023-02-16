const router = require('express').Router()
const SongsController = require('../controllers/SongController')
const checkToken = require('../middlewares/login')
const cors = require('cors')

router.use(cors())

router.post('/', checkToken, SongsController.create);
router.get('/', SongsController.getting);

//Private routes
router.post('/yourSongs', checkToken, SongsController.gettingByUser);
router.delete('/yourSongs', checkToken, SongsController.delete);

module.exports = router;