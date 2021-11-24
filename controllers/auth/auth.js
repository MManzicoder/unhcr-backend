import { Admin } from "../../models/admin";
import { createToken } from "../../utils/token.js";
import { comparePassword, hashPassword, makeUniqueCode } from "../../utils/hash.js";

export default {
  loginAdmin :  async ({email, password})=>{
      try {
        let admin = await Admin.findOne({email});
        if(!admin) return res.status(400).json({err: "Invalid credentials!"});
        const isMatch = await comparePassword(password, admin.password);
        if(!isMatch) return res.status(400).json({err: "Invalid credentials!"});
        let token = createToken(admin._id);
        return {...admin._doc, _id: admin._id.toString(),token}; 
      } catch (error) {
          console.log("Error ..." +error.message);
      }
},
createAdmin: async ({firstName, lastName, username, phone, email, password })=>{
     try {
          let admin = await Admin.findOne({email});
          if(admin) throw new Error("Account already exists!");
          admin = await Admin.findOne({username});
          const hashedPassword = await hashPassword(admin.password);

          if(admin) throw new Error("Username already taken!");
          admin = new Admin({
            firstName,
            lastName,
            username,
            phone,
            email,
            password: hashedPassword
          })
          const activationcode = makeUniqueCode(30);
          admin.activationcode = activationcode;
          admin = await admin.save();
          if(emailTransporter(admin)){
          let token = createToken(admin._id);
          return {...admin._doc, _id: admin._id.toString(),token};
          };
          
          throw new Error("An error occured!");

     } catch (error) {
       console.log("Error ..."+error.message);
     }
},
updateAdmin: async ({id, data: { firstName, lastName, username, phone, email, password}}, req) =>{
         let admin = await Admin.findById(id);
         if(!admin) throw new Error("Not found!");
        admin = await Product.findOneAndUpdate({_id: id}, {firstName, lastName, username, phone, email, password}, {new: true});
         return { ...admin._doc, _id: admin._id.toString()}
    },
deleteAdmin: async ({id}, req) =>{
         let admin = await Admin.findById(id);
         if(!admin) throw new Error("Not found!");
         await Admin.findByIdAndDelete(id, (err, done)=>{
           if(!err) return {message: "Deleted user!"}
         });
    },
}


