const jwt = require("jsonwebtoken");

exports.createToken = userId =>{
   return jwt.sign({userId }, process.env.PRIVATE_KEY,{
        expiresIn: "1d"
    })
}

