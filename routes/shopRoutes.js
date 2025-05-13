// Shop Page
// routes/pagesRoutes.js
const express = require('express');
const router  = express.Router();
const shopController = require('../controllers/shopController');

router.get('/shop',  shopController.getShop);
router.get('/womenGuide', shopController.getwomenGuide)
router.get('/customise', shopController.customise)
module.exports = router;