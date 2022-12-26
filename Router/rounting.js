import express from 'express'
//import { Router } from 'express'


import {signUp} from '../Controller/userControl.js'

const router=express.Router()

// router.route("/").get(signUp)
router.route("/signup").post(signUp);

export default router