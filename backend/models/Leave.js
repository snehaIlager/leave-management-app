const mongoose = require("mongoose");

// Schema for leave requests
const leaveSchema = new mongoose.Schema(
 {
   // Reference to employee who applied leave
   employeeId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: true,
   },

   leaveType: {
     type: String,
     required: true,
   },

   startDate: {
     type: Date,
     required: true,
   },

   endDate: {
     type: Date,
     required: true,
   },

   reason: {
     type: String,
     required: true,
   },

   // Leave status controlled by employer
   status: {
     type: String,
     enum: ["Pending", "Approved", "Rejected"],
     default: "Pending",
   },
 },
 { timestamps: true } // automatically adds createdAt & updatedAt
);

module.exports = mongoose.model("Leave", leaveSchema);