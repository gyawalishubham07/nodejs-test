import mongoose from "mongoose";
import Order from "../models/Order.js";
import orderService from "../services/orderService.js"

const CreateOrder = async (req,res) => {
    const input=req.body;
    const user=req.user;
   try {
    const createOrder= await orderService.CreateOrder({userId:user.id,...input});
    res.status(201).json(createOrder);
   } catch (error) {
    res.status(500).send(error.message);
   }
};

const getAllOrderByUser = async (req,res) => {
    const user=req.user;
    // console.log(orderService.getAllOrderByUser(user.id))

   try {
    const orders= await orderService.getAllOrderByUser(user.id)
    // console.log(orders);
    res.json(orders);
   } catch (error) {
    res.status(500).send(error.message);
   }
}
export {
    CreateOrder,
    getAllOrderByUser,
};