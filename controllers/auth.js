const { Admin } = require("../models/admin");
const { createToken } = require("../utils/token")
const { comparePassword } = require("../utils/hash")

const login = async (req, res)=>{
      try {
        let {email, password} = req.body;
        let user = await Admin.findOne({email});
        if(!user) return res.status(400).json({err: "Invalid email or password!"});
        const isMatch = await comparePassword(password, user);
        if(!isMatch) return res.status(400).json({err: "Invalid email or password!"});
        let token = createToken(user._id);
        let { _id, username, adminType } = user;
        email = user.email;
        return res.json({token, user:{_id, username, email, adminType}}); 
      } catch (error) {
          console.log("Error ...", error.message);
      }
}