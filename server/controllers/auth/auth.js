import { Admin, isValidID } from "../../models/admin.js";
import * as bcrypt from "bcrypt"; 
import { createToken } from "../../utils/token.js";
import { comparePassword, hashPassword, makeUniqueCode } from "../../utils/hash.js";
import { emailTransporter } from "../../utils/token.js";
import mongoose from "mongoose";

export default {
  hello: async ()=>{
    return {message: "Hello there!"}
  },
  loginAdmin:  async ({email, password}, req)=>{
      try {
        console.log(email+ " "+password)
        let admin = await Admin.findOne({email});
        if(!admin) return new Error("Invalid credentials!");
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) return new Error("Invalid credentials!");
        // if(!admin.active) return new Error("You need to verify your email");
        let token = await createToken(admin._id);
        return {...admin._doc, _id: admin._id.toString(),token}; 
      } catch (error) {
          console.log("Error ..." +error.message);
      }
},
createAdmin: async ({userInput: {firstName, lastName, username, phone, email, password }}, req)=>{
     try {
          let admin = await Admin.findOne({email});
          if(admin) return new Error("Account already exists!");
          admin = await Admin.findOne({username});
          if(admin) return new Error("Username already taken!");
          const hashedPassword = await bcrypt.hash(password, 10);
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
          emailTransporter(admin)
          .then(res=>{
            return {message: "Verify your account"};
          })  
          .catch(err=>{
       
            return new Error(err.message);
          })
          return {message: "Hey verify your account"};
     } catch (error) {
       return new Error(error.message);
     }
},
verifyAccount: async ({activationcode}, req)=>{
     try {
       let admin = await Admin.findOne({activationcode});
       if(!admin) return new Error("Invalid code!");
       admin.active = true;
       admin = await admin.save();
       const token = await createToken(admin._id);
       return {...admin._doc, _id: admin._id.toString(), token }

     } catch (error) {
       return new Error(error.message);
     }
},
updateAdmin: async ({id, data: { firstName, lastName, username, phone, email, password}}, req) =>{
         if(!isValidID(id)) return new Error("Invalid ID!");
         let admin = await Admin.findOne({_id: id});
         if(!admin) return new Error("Not found!");
        admin = await Admin.findOneAndUpdate({_id: id}, {firstName, lastName, username, phone, email, password}, {new: true});
         return { ...admin._doc, _id: admin._id.toString()}
    },
deleteAdmin: async ({adminId, id}, req) =>{
         if(!isValidID(id)) return new Error("Invalid ID!")
         if(!isValidID(adminId)) return new Error("Invalid superId!");
         let admin = await Admin.findById(adminId);
         if(!admin) return new Error("Not found!");
         if(admin.adminType !== "SUPER ADMIN") return new Error("Access denied!");
         admin = await Admin.findById(id);
         if(!admin) return new Error("admin not found!")
         await Admin.findByIdAndDelete(id);
         return {message: "Deleted Account!"};
    },
}


