import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.js";
export const checkAuth = async (req, next) =>{
    try {
        const token = req.headers.bearer;
        console.log(token);
        const {userId, username } = await jwt.verify(token, process.env.PRIVATE_KEY);
        let admin = await Admin.findOne({_id: userId});
        if(!admin) return new Error("Admin resource, access denied!");
        return userId;
    } catch (error) {
        return new Error(error.message);
    }
}