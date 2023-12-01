// import { verifyJWT, verifyAdmin } from 'path-to-your-authentication-middleware'; // Adjust the path accordingly
import Category from '../../model/category/Category.js';


export const addCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await Category.create(category);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export default { addCategory, getCategories };
// Add other category-related controller functions here
