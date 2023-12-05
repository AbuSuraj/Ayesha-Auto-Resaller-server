import express from 'express';
// import categoryController from '../../controllers/category/category.controller.js';
// const router = express.Router();

// // add a categories to db

// router.get('/get-all')
// router.post('/add',categoryController.addCategory)

   
// export default router;
// routes/categoryRoutes.js
import express from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController';

router.get('/categories', categoryController.getAllCategories);
router.post('/addcategory', categoryController.addCategory);

export default router;

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
