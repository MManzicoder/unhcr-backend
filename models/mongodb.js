const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, (err, done)=>{
    if(err) console.log(err.message);
    console.log("CONNECTED TO DB ...");
})