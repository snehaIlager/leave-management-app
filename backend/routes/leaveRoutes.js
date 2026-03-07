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

router.post("/apply", protect, allowRole("employee"), applyLeave);
router.get("/my", protect, allowRole("employee"), getMyLeaves);

router.get("/", protect, allowRole("employer"), getAllLeaves);

router.patch("/:id", protect, allowRole("employer"), updateLeaveStatus);

module.exports = router;