const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
// Import controllers
const categoryController = require('../../controllers/category/category.controller.js');
const productController = require('../../controllers/products/products.controller.js')


router.post('/add', categoryController.addCategory);
router.get('/',categoryController.getCategories);
router.get('/:id', verifyJWT, productController.getProductsByCategoryId);

module.exports = router;


/**
   * @api {post} /add-new category
   * @apiDescription save new category
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
