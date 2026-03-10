const mongoose = require("mongoose");

// Schema for user accounts
const userSchema = new mongoose.Schema(
 {
   name: {
     type: String,
     required: true,
   },

   email: {
     type: String,
     required: true,
     unique: true, // prevents duplicate emails
   },

   password: {
     type: String,
     required: true,
   },

   // Role decides access permissions
   role: {
     type: String,
     enum: ["employee", "employer"],
     required: true,
   },
 },
 { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);