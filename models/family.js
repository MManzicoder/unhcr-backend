import mongoose from "mongoose";
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
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    refugeeId: {
        type: String,
    },
    type: {
        type: String,
        required: true
    }
})
const leaderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    refugeeId: {
        type: String
    },
    family: {
        type: ObjectId,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    leaderType: {
        type: String,
        required: true
    }
})
export const Leader = mongoose.Schema("Leader", leaderSchema);
export const Family = mongoose.model("Family", familySchema);
export const Child = mongoose.model("Child", childSchema)