import mongoose from 'mongoose'
const {ObjectId} = mongoose.SchemaTypes;
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
    },

}, { 
    timestamps: true
})

const Family = mongoose.model("family", familySchema);

export default Family;
