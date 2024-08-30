import mongoose from "mongoose";
//import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance= await mongoose.connect(`mongodb://localhost:27017/wanderlust`)
    console.log(`\n MongoDB connected !! `)
    

  } catch (err){
    console.log("Mongodb connection error" ,error);
    process.exit(1);
  }
};

export default connectDB;
