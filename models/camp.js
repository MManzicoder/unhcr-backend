const mongoose = require("mongoose");
const campSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   province: {
       type: String,
       required: true,
   },
   district: {
       type: String,
       required: true
   },
   sector: {
       type: String,
       required: true,
   },
   cell: {
       type: String,
       required: true
   },
   village: {
       type: String,
       required: true
   }
},{
    timestamps: true
})

exports.Camp = mongoose.model("Camp", campSchema);
