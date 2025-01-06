import express from "express";
import dotenv from "dotenv";
import products from "./routes/products.js";
import auth from "./routes/auth.js";
import order from "./routes/order.js";
import bodyParser from "body-parser";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();
connectDB();

//from dependecies body paeser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger);  // for everyone method
app.use(cookieParser());
app.use(cors({
  origin:process.env.APP_URL,  //for frontend & :5000 for backend
}))

const PORT = process.env.PORT;
//JSON=JavaScript Object Notation
// app.get('/',(req,res)=>{
//     res.send('Home Page')
// })

// app.get("/", logger,(req, res) => {   // logger used for particular router and method only
  app.get("/",(req, res) => { 
  // it will give localhost:5000/
  // res.status(500).json({
  res.json({
    appname: "day3 node.js",
    version: "1.0.0",
    port: PORT,
  });
});

// app.use("/products", products); //it will give  it will give localhost:5000/products

app.use("/api/products", products);
app.use("/api/auth",auth);
app.use("/api/order",order);

// app.get('/about',(req,res)=>{
//     res.send("About Page")
// })
// app.get('/products',(req,res)=>{
//     res.send("Product page")
// })

app.listen(5000, () => {
  console.log(`Server is listen at port ${PORT}...........`);
});

//HTTP Methods
/** CRUD
 * Read  GET /Product   //take data from user
 * Write (Create)  POST /Product   //all data are witten/add to the browser
 * Update  PUT /Product/:id    //for particular data update id used
 * Delete  DELETE /Product/:id   //delete data
 */
