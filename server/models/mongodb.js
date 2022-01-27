import mongoose from "mongoose";
 export default mongoose.connect(process.env.DB_URL)
 .then(res=> console.log("CONNECTED TO DB ..."))
 .catch(err=>console.log(err.message));