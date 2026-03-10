const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register a new user
exports.register = async (req, res) => {
 try {
   const { name, email, password, role } = req.body;

   // Validate required fields
   if (!name || !email || !password || !role) {
     return res.status(400).json({ message: "All fields required" });
   }

   // Check if email already exists
   const existingUser = await User.findOne({ email });

   if (existingUser) {
     return res.status(400).json({ message: "Email already registered" });
   }

   // Encrypt password before storing in DB
   const hashedPassword = await bcrypt.hash(password, 10);

   // Create user document in MongoDB
   const user = await User.create({
     name,
     email,
     password: hashedPassword,
     role,
   });

   // Send JWT token with user info
   res.json({
     token: generateToken(user),
     user,
   });
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};

// Login existing user
exports.login = async (req, res) => {
 try {
   const { email, password } = req.body;

   // Find user by email
   const user = await User.findOne({ email });

   if (!user) {
     return res.status(400).json({ message: "User not found" });
   }

   // Compare entered password with hashed password
   const valid = await bcrypt.compare(password, user.password);

   if (!valid) {
     return res.status(400).json({ message: "Invalid password" });
   }

   // Send JWT token after successful login
   res.json({
     token: generateToken(user),
     user,
   });
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};