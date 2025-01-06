import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    price:{
            type:Number,
            required:true,
    },

    category: String,
    brand: String,
    discountprice:Number,
    rating:Number,
    description:String,
    image:String,

    createdAt:{
        type:Date,
        default:Date.now(),
    },

    createdBy:{     //  models/users.js/id => userId  //reference (foregin key)
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

})

export default mongoose.model("Products",productSchema)