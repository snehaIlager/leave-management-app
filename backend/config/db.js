const mongoose = require("mongoose");

// Function to connect backend to MongoDB database
const connectDB = async () => {
 try {
   // Connect using connection string from environment variables
   await mongoose.connect(process.env.MONGO_URI);

   console.log("MongoDB connected");
 } catch (error) {
   // If DB fails to connect, log error and stop server
   console.error("Database connection failed:", error.message);
   process.exit(1);
 }
};

module.exports = connectDB;