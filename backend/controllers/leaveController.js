const Leave = require("../models/Leave");

// Employee applies for leave
exports.applyLeave = async (req, res) => {
 try {
   const { leaveType, startDate, endDate, reason } = req.body;

   // Validate input fields
   if (!leaveType || !startDate || !endDate || !reason) {
     return res.status(400).json({ message: "All fields required" });
   }

   // Check if date range is valid
   if (new Date(startDate) > new Date(endDate)) {
     return res.status(400).json({ message: "Invalid date range" });
   }

   // Create leave request linked to logged-in employee
   const leave = await Leave.create({
     employeeId: req.user.id,
     leaveType,
     startDate,
     endDate,
     reason,
   });

   res.json(leave);
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};

// Get leaves of logged-in employee
exports.getMyLeaves = async (req, res) => {
 try {
   const leaves = await Leave.find({ employeeId: req.user.id }).sort({
     createdAt: -1,
   });

   res.json(leaves);
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};

// Employer gets all leave requests
exports.getAllLeaves = async (req, res) => {
 try {
   // populate fetches employee name & email from User collection
   const leaves = await Leave.find().populate("employeeId", "name email");

   res.json(leaves);
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};

// Employer approves or rejects leave
exports.updateLeaveStatus = async (req, res) => {
 try {
   const { status } = req.body;

   const leave = await Leave.findById(req.params.id);

   if (!leave) {
     return res.status(404).json({ message: "Leave not found" });
   }

   // Update leave status
   leave.status = status;

   await leave.save();

   res.json(leave);
 } catch (error) {
   res.status(500).json({ message: "Server error" });
 }
};