import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDB;
