const mongoose = require("mongoose");
const familySchema = new mongoose.Schema({
    leader: {
     type: String,
     required: true
    },
    children: {
        type: Number,
        required: true
    },

}, {
    timestamps: true
})

exports.Family = mongoose.model("family", familySchema);