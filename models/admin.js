import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String, required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, required: true
    },
    adminType: {
        type: String,
        default: "ADMIN"
    },
    active: {
       type: Boolean,
       default: false
    },
    activationcode: {
        type: String,
        unique: true
    }

})

export const Admin = mongoose.model("admin", adminSchema);
export const isValidID=id=>{
    const { ObjectId } = mongoose.Types;
      if(ObjectId.isValid(id)) return true;
      return false;
}