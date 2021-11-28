import mongoose from 'mongoose'
const {ObjectId} = mongoose.SchemaTypes;
const familySchema = new mongoose.Schema({
    man: {     
        personInfo:{
            firstName:String,
            lastName:String,
            dob:String,
            gender:String,
            education:Number,
            defects:[String],
         },
         alive:Boolean,
         leader:Boolean 
    },
    speciality:{
        case:String,
        concerns:[String]
    },
   
    woman: {     
         personInfo:{
            firstName:String,
            lastName:String,
            dob:String,
            gender:String,
            education:Number,
            defects:[String],
         },
         alive: Boolean,
         leader:Boolean
    },

    children: [
        {
            firstName: String,
            lastName:String,
            dob: String,
            education: String,
            gender:String,
            defects: [String],
            withUs:Boolean,
            alive:Boolean,
            leader:Boolean
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
