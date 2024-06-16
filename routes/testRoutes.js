const express = require('express');

const { testUserController } = require('../controllers/testController');

//router Object
const router = express.Router()

//router
router.get("/test-user", testUserController);

//export
module.exports = router;