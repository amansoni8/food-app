const express = require('express');
const { getUserController } = require('../controllers/userConntroller');
const authMiddleware = require('../middlewares/authMiddleware');

const router  = express.Router()

//routes
//Get User || post
router.get('/getUser', authMiddleware, getUserController)

module.exports = router