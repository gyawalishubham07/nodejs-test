import express from "express";
import auth from '../middlewares/auth.js'
import { CreateOrder, getAllOrderByUser } from "../controllers/orderController.js";

const router=express.Router();

router.post('/',auth,CreateOrder);

router.get('/user', auth,getAllOrderByUser);

export default router;