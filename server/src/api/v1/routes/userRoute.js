const express = require('express')
const {
	register,
	login,
	logout,
	forgotPassword,
	resetPassword,
	getUserDetail,
	updatePassword,
	updateProfile,
	getAllUser,
	getSingleUser,
	updateUserRole,
	deleteUser,
} = require('../controllers/userController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

const router = express.Router()

router.route('/user/register').post(register)

router.route('/user/login').post(login)

router.route('/user/logout').get(logout)

router.route('/user/password/forgot').post(forgotPassword)

router.route('/user/password/reset/:token').put(resetPassword)

router.route('/user/profile').get(isAuthenticatedUser, getUserDetail)

router.route('/user/password/update').put(isAuthenticatedUser, updatePassword)

router.route('/user/profile/update').put(isAuthenticatedUser, updateProfile)

router
	.route('/admin/users')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllUser)

router
	.route('/admin/user/:id')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router
