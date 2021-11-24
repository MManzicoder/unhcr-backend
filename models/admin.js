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
    activationcode: {
        type: String
    }
})

export const Admin = mongoose.model("admin", adminSchema);