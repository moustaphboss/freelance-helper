import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://moustaphboss:Ahil7ZRkJiGnUELx@cluster0.iphcyqk.mongodb.net/freelance-helper?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;