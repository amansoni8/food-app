const express = require('express');
const { getUserController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { updateUserController } = require('../controllers/userController');
const { updatePasswordController } = require('../controllers/userController');
const { resetPasswordController } = require('../controllers/userController');
const { deleteProfileController } = require('../controllers/userController');

const router  = express.Router()

//routes
//Get User || post
router.get('/getUser', authMiddleware, getUserController)

//update profile
router.put('/updateUser', authMiddleware, updateUserController )

//update user password
router.post('/updatePassword',authMiddleware,updatePasswordController)

//reset password
router.post('/resetPassword',authMiddleware, resetPasswordController)

// delete USER
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router