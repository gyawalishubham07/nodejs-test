import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Uri = process.env.MONGODB_URI;

// 'mongodb+srv://shubhamgyawali:gy@w@li2061@cluster0.x9ngj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/node-20810910';
//mongoodb_url + database_name(node-20810910)

const connectDB = async () => {
  try {
    await mongoose.connect(Uri);

    console.log("MongoDB Connected.......");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};
export default connectDB;
