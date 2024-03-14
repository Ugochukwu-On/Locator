// Import mongoose and dotenv
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
console.log(process.env.MONGODB_URI)
// Define the MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;

// Establish MongoDB connection
export const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in the environment variables.');
        }
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error
    }
};