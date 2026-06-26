import * as authController from '../controllers/auth.controllers.js'

import express from 'express'

const router = express.Router()



router.post("/register" , authController.CreateUser)
router.post("/login" , authController.LoginUser)



export default router