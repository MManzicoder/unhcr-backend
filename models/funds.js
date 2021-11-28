import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema

const fundSchema = new mongoose.Schema({
        family: {
            type: ObjectId,
            required: true,
            ref: "family"
        },
        amount: {
            type: Number,
            required: true
        },
        createdBy: {
            type: ObjectId,
            refs: "admin"
        }
    }, {
        timestamps: true
    }

)

const Funds = mongoose.model("funds", fundSchema);
export default Funds;