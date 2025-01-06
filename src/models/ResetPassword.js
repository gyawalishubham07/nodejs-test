import mongoose from "mongoose";

const resetPasswordSchema = new  mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        default:Date.now() + 3600000,   // Expire at 1 hour = (60sec * 60 min )hr * 1000 mini-sec
    }
});

export default mongoose.model("ResetPassword", resetPasswordSchema);
