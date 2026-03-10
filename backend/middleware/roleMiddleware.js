// Middleware to restrict access based on user role
const allowRole = (role) => {
 return (req, res, next) => {

   // Check if logged-in user has required role
   if (req.user.role !== role) {
     return res.status(403).json({ message: "Access denied" });
   }

   next();
 };
};

module.exports = allowRole;