const router = require('express').Router()

router.use('/personnel', require('./personnel'));
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));

//add additional model routes here as you create them!

module.exports = router;
