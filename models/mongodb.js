import mongoose from "mongoose";
 export default mongoose.connect(process.env.DB_URL, (err, done)=>{
    if(err) console.log(err.message);
    console.log("CONNECTED TO DB ...");
})