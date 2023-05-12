const express = require('express');
const router = express.Router();
const homeController=require('../controllers/home_controller');
const profileController= require('../controllers/profile_controller');


router.get('/',homeController.home);
router.get('/profile',profileController.profile);

module.exports=router;