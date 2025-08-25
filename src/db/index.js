import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export default async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log('MongoDB connection error: ', error);
    process.exit(1);
  }
}