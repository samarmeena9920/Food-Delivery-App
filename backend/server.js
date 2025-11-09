import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config.js'

const frontendURL = "https://food-delivery-app-frontend-196z.onrender.com";
const adminURL = "https://food-delivery-app-admin-tar4.onrender.com";

const corsOptions = {
  origin: [frontendURL, adminURL, "http://localhost:5173", "http://localhost:5174"]
};

// app config — ensure app is initialized before using it
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors(corsOptions));

// DB config
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static(uploadsDir));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
