// const mongoose = require("mongoose");
import mongoose from 'mongoose'
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

const Family = mongoose.model("family", familySchema);

export default Family;