const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const leaveRoutes = require("./routes/leaveRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Allow cross-origin requests (frontend ↔ backend)
app.use(
  cors({
    origin: "*"
  })
);

// Parse incoming JSON requests
app.use(express.json());

// Auth routes (login, register)
app.use("/api/auth", authRoutes);

// Leave management routes
app.use("/api/leaves", leaveRoutes);

// Test route to confirm API is running
app.get("/", (req, res) => {
 res.send("Leave Management API running");
});

const PORT = process.env.PORT || 5000;

// Start backend server
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});