const jwt = require("jsonwebtoken");

// Function to generate JWT token after login or registration
const generateToken = (user) => {
 return jwt.sign(
   {
     // Payload stored inside token
     id: user._id,
     role: user.role,
   },
   process.env.JWT_SECRET, // Secret key used to sign the token
   { expiresIn: "1d" } // Token validity (1 day)
 );
};

module.exports = generateToken;