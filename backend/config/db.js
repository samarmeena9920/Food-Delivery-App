import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose
    .connect(
      process.env.MongoDB_URL
    )
        .then(() =>
            console.log("MongoDB connected")); 
        }
