const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const protect = (req, res, next) => {
 try {
   // Extract token from Authorization header
   const token = req.headers.authorization?.split(" ")[1];

   if (!token) {
     return res.status(401).json({ message: "No token provided" });
   }

   // Verify token using secret key
   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   // Attach user info to request
   req.user = decoded;

   next();
 } catch (error) {
   res.status(401).json({ message: "Invalid token" });
 }
};

module.exports = protect;