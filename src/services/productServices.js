import { getProductsById } from "../controllers/productController.js";
import Products from "../models/Products.js";

const getAllProducts = async (query) => {
  const limit = query.limit;
  const sort = query?.sort ? JSON.parse(query.sort) : {}; // query?.sort (If query is not sort, it will safely return undefined without throwing an error)
  const filters = query?.filters ? JSON.parse(query.filters) : {}; // -1:desending & 1: ascending
  const page = query.page || 1;
  const offset = (page - 1) * limit;

  console.log(filters); //{ category: 'Smartphone', name: 'Galaxy' }

  /**
   * NOte:RegExp => new RegExp("pattern", "flags");
   * used to find patterns in strings. They can be used for tasks like searching, replacing, or extracting text that matches specific patterns
   * flags =>"i"  :-
   *               Case-insensitive (match both uppercase and lowercase).
   */
  const coustomeQuery = Object.entries(filters).reduce((acc, [key, value]) => {
    const result = { ...acc, [key]: new RegExp(value, "i") };
    return result;
    // console.log({...acc});
    // console.log({key:value});
  }, {});
  return await Products.find(coustomeQuery)
    .limit(limit)
    .sort(sort)
    .skip(offset);

  //  console.log(coustomeQuery);    //{ category: /Smartphone/i, name: /Galaxy/i }
  // const filterQuery={
  //   name:new RegExp(filters.name,"i"),
  //   category:new RegExp(filters.category,"i")
  // };
};

const getProductById = async (id) => {
  return await Products.findById(id);
};

const createProduct = async (data, userId) => {
  return await Products.create({ ...data, createdBy: userId });
};
const updateProduct = async (id, data) => {
  return await Products.findByIdAndUpdate(id, data);
};

const deleteProduct = async (id) => {
  return await Products.findByIdAndDelete(id);
};

const getAllCategories = async () => {
  return await Products.distinct("category");
};

const getTotal = async () => {
  return await Products.countDocuments();
};
export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllCategories,
  getTotal,
};
