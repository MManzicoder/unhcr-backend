const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema;
const familySchema = new mongoose.Schema({
    leader: {
     type: ObjectId,
     ref: "Leader",
     required: true
    },
    children: [ObjectId],
    campName: {
        type: ObjectId,
        ref: "Camp",
        required: true
    }
}, {
    timestamps: true
})
const childSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    family: {
        type: ObjectId,
        ref: "Family",
    },
    gender: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})
exports.Family = mongoose.model("Family", familySchema);