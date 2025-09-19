import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://samarmeena9920:Sambahadur9920@cluster0.2uhbwy9.mongodb.net/FoodDelivery')
        .then(() =>
            console.log("MongoDB connected")); 
        }