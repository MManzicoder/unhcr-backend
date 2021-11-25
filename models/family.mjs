import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema
const familySchema = new mongoose.Schema({
    leader: {
     type: String,
     required: true
    },
    children: [
        {
            firstName: String,
            lastName:String,
            dob: String,
            education: String,
            defects: [String]
        }
    ],
    campName: {
        type: String,
        
        required: true
    },
   

}, { 
    timestamps: true
})

const Family = mongoose.model("family", familySchema);

export default Family;
