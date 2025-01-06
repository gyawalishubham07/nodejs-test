import mongoose from "mongoose";
import Order from "../models/Order.js";
import Products from "../models/Products.js";

const CreateOrder = async (data) => {
  return await Order.create(data);
};

const getAllOrderByUser = async (userId) => {
  //    return await Order.find({userId})
  console.log("User ID:", userId);

  const result = await Order.aggregate([
    {
      $match: {
         userId: new mongoose.Types.ObjectId(userId),
      },
    },

    {
      $lookup: {
        from: "products", // Must match your collection's name
        localField: "productId",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
        $unwind: '$productDetails',
    },
  ]);
  console.log(result);
  return result;
};
export default {
  CreateOrder,
  getAllOrderByUser,
};
