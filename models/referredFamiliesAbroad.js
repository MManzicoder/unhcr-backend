import mongoose, { isValidObjectId } from "mongoose"
const { ObjectId } = mongoose.Schema;
const referredFamilySchema = new mongoose.Schema({
    familyId:{
        type: ObjectId,
        required: true
    },
    newSettlement:{
        type: String
    },
    settled: {
        Type: Boolean,
        deafu
    }
}, {
    timestamps: true
});
export const ReferredFamily = mongoose.model("referredFamily", referredFamilySchema)