// Shop Page
// routes/shopRoutes.js
const express = require('express');
const router  = express.Router();
const shopController = require('../controllers/shopController');
const isAdmin = require('../middleware/isAdmin');

router.get('/shop',  shopController.getAllProducts);
router.post('/admin/products/bulk-update-price', isAdmin, shopController.bulkUpdatePrice); // always on top
router.get('/admin/products', isAdmin, shopController.getAll);
router.get('/admin/products/new', isAdmin, shopController.newForm);
router.post('/admin/products', isAdmin, shopController.create);
router.get('/admin/products/:id/edit', isAdmin, shopController.editForm);
router.post('/admin/products/:id', isAdmin, shopController.update);
router.post('/admin/products/:id/delete', isAdmin, shopController.delete);

router.get('/shop',  shopController.getShop);
router.get('/womenGuide', shopController.getwomenGuide)
router.get('/customise', shopController.customise)
router.get('/heelsW', shopController.getheelsW)
router.get('/sneakers', shopController.getsneakers)
router.get('/flats', shopController.getflats)
module.exports = router;

// controllers/shopController.js

exports.customise = (req, res) => {
    res.render('customise', { stylesheet: 'customise' }); // Key line!
  };
  
module.exports = router;
