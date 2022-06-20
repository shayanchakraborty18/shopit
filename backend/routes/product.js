const express = require('express');
const router = express.Router();

const { 
  getProducts, 
  newProduct, 
  getSingleProduct, 
  updateProduct, 
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview

} = require('../controllers/productController');

const { isAuthenticated, authorizeRoles } = require('../middlewares/auth');
//Get all products
router.route('/admin/products').get(isAuthenticated, authorizeRoles('admin'),getProducts);
router.route('/products').get(getProducts);

//Create a new product
router.route('/admin/product/new').post(isAuthenticated, authorizeRoles('admin'), newProduct);

//Get a product
router.route('/product/:id').get(getSingleProduct);

//Update a product
router.route('/admin/product/:id')
  .put(isAuthenticated, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticated, authorizeRoles('admin') , deleteProduct);


router.route('/review').put(isAuthenticated, createProductReview)
router.route('/reviews').get(isAuthenticated, getProductReviews)
router.route('/reviews').delete(isAuthenticated, deleteReview)

module.exports = router;