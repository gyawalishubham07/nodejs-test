import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  items: {
    type: Number,
    min: 1,
    default: 1,
  },
  purchasedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Order", orderSchema);
