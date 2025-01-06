// import url from "url";
// import path from "path";
// import fs from "fs";
import productServices from "../services/productServices.js";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const rawdata = fs.readFileSync(
//   `${__dirname}/../../data/products.json`,
//   "utf-8"
// );
// const products = JSON.parse(rawdata);

const getAllProducts=async (req, res) => {
try {
  const products=await productServices.getAllProducts(req.query);

     res.json(products);
} catch (error) {
  res.status(500).send(error.message);
}
  }

 const getProductsById=async (req, res) => { 
      const id = req.params.id;
      try {
        const product=await productServices.getProductById(id);

        if (!product) return res.status(404).send("Product Not Found");
        res.json(product);

      } catch (error) {
        res.status(500).send(error.message);
      }

      // const product = products.find((item) => item.id == id); // find => give single data only & not in array 
      // if (!product) res.status(404).send("Product Not Found");
     
     
    }

 const addProducts= async (req,res)=>
  {
    const data=req.body;
    const userId=req.user.id;
    if(!data.name) return res.status(422).send('Product name is required');
    if(!data.price) return res.status(422).send('Product price is required');

    try {
      const createdProduct=await productServices.createProduct(data,userId);
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }

//     products.push(newproduct);
// fs.writeFileSync(`${__dirname}/../../data/products.json`,JSON.stringify(products));
}

const updateProduct= async (req,res)=>{
  const id =req.params.id;
  const data=req.body;
  const user=req.user;

 try {
  const product=await productServices.getProductById(id);
  if (!product) return res.status(404).send("Product Not Found");

   if(product.createdBy != user.id && !user.roles.includes("Admin")) return res.status(403).send("Access denied....") ;

  const updateProduct= await productServices.updateProduct(id,data);

  res.json(updateProduct);
 } catch (error) {
  res.status(500).send(error.message);
 }
}


//Delete Product
const deleteProduct= async (req,res)=>{
  const id = req.params.id;
  const user=req.user;

try {
  const product=await productServices.getProductById(id);
  if (!product) return res.status(404).send("Product Not Found");

  if(product.createdBy != user.id && !user.roles.includes("Admin")) return res.status(403).send("Access denied....") ;

   await productServices.deleteProduct(id);
  res.send(`Product has been deleted of id: ${id} from database.......`)
} catch (error) {
  res.status(500).send(error.message);
}};


//Get All Categories
const getAllCategories= async (req,res) => {
  try {
    const categories=await productServices.getAllCategories();
  
       res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
    }


// Get Total Product
const getTotal= async (req,res) => {
  try {
    const total=await productServices.getTotal();
  
       res.json(total);
  } catch (error) {
    res.status(500).send(error.message);
  }
    }

export {getAllProducts,getProductsById,addProducts,updateProduct,deleteProduct,getAllCategories,getTotal};