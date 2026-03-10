const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const allowRole = require("../middleware/roleMiddleware");

const {
 applyLeave,
 getMyLeaves,
 getAllLeaves,
 updateLeaveStatus,
} = require("../controllers/leaveController");

// Employee applies for leave
router.post("/apply", protect, allowRole("employee"), applyLeave);

// Employee views their own leaves
router.get("/my", protect, allowRole("employee"), getMyLeaves);

// Employer views all leave requests
router.get("/", protect, allowRole("employer"), getAllLeaves);

// Employer approves or rejects leave
router.patch("/:id", protect, allowRole("employer"), updateLeaveStatus);

module.exports = router;