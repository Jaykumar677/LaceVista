const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const shopController = require('../controllers/shopController'); // Add this line to import shopController

// Routes for the home page
router.get('/', homeController.getHome);
router.get('/about', homeController.getAbout);
router.get('/customise', shopController.customise); // This should now work

module.exports = router;
