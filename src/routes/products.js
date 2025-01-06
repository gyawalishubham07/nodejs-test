import express from "express";
// import url from "url";
// import path from "path";
// import fs from "fs";
import { addProducts, getProductsById,getAllProducts, updateProduct, deleteProduct, getAllCategories, getTotal } from "../controllers/productController.js";
import auth from '../middlewares/auth.js'
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
 const router = express.Router();

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const rawdata = fs.readFileSync(
//   `${__dirname}/../../data/products.json`,
//   "utf-8"
// );
// const products = JSON.parse(rawdata);

/**
 * GET
 * /api/products/category
 * GET all categories
 * No authentication and authorization needed
 */
router.get("/category",getAllCategories)

router.get("/total",getTotal)

/**
 * GET
 * /api/products
 * GET all products
 * No authentication and authorization needed
 */
router.get("/",getAllProducts)
// router.get('/products',(req,res)=>{   //  it will give   /products/products
// router.get("/", (req, res) => {
//   //    it will give   /products/      here products came from app.js
//   res.json(products);
// });

/**
 * GET
 * /api/products/:id
 * GET products by id
 * No authentication and authorization needed
 */
router.get("/:id",getProductsById);
//  /api/products/:id      here,/:id is dynamic routes which will be changed

// router.get("/:id", (req, res) => {

// //Router Request Params

//   // console.log(req.params)    // see output README.txt

//   const id = req.params.id;
//   // const product=parseInt(id);      //String into integer   "1"  will be 1

//   console.log(products.filter((item) => item.id == id)); // filter => give evey match data in array;
//   const product = products.find((item) => item.id == id); // find => give single data only & not in array

//   if (!product) res.status(404).send("Product Not Found");
//   res.send(product);
// });

/**
 * POST
 * /api/products
 * Add a product
 * Authentication required but no  authorization required
 */
router.post('/',auth,addProducts);
// router.post('/',(req,res)=>{
//     // console.log(req.body);
//     const newproduct=req.body;

//     products.push(newproduct);
// fs.writeFileSync(`${__dirname}/../../data/products.json`,JSON.stringify(products));  //JSON.stringify=>Converts a JavaScript object or array into a JSON string

//     res.status(201).send(products);
// });

/**
 * PUT
 * /api/products/:id
 * Update a product
 * Authentication and authorization required
 * Admin can update product
 * User can create their product and update it
 */
router.put('/:id',auth,updateProduct);

/**
 * DELETE
 * /api/products/:id
 * Delete a product
 * Authentication and authorization required
 * Only admin can delete the product
 */
router.delete("/:id",[auth,roleBasedAuth("Admin")],deleteProduct)
export default router;
