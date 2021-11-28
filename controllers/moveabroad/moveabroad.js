import { ReferredFamily } from "../../models/referredFamiliesAbroad.js"
import { checkAuth } from "../../utils/checkAuth.js";

export default {
 getNewSettleMent: async (args, req)=>{
      try {
           const {} = checkAuth(req);
            const settlements = await ReferredFamily.find().exec();
            return settlements.map((set, i)=>{
                return {
                    ...set._doc,
                    _id: set._id.toString()
                }
            })
      } catch (error) {
          return new Error(error.message);
      }
 },
 registerSettlement: async ({data: {familyId, newSettlement}}, req)=>{
      try {
            let settlement = await ReferredFamily.findOne({familyId: familyId})
            if(settlement) return new Error("This family is already registered!");
            settlement = new ReferredFamily({
                familyId,
                newSettlement,
                movementDate: data.movementDate ? data.movementDate: ""
            })
            settlement = await settlement.save();
            return {message: "family registered successfully!"};
      } catch (error) {
          return new Error(error.message);
      }
 },
 updateSettlement: async({id, data: {familyId, newSettlement, movementDate, settled}}, req)=>{
            try {
                    let settlement = await ReferredFamily.findOne({_id: id})
                    if(!settlement) return new Error("Requested settlement not found!");
                    settlement = await ReferredFamily.findOneAndUpdate({_id: id}, {familyId, newSettlement, movementDate, settled}, {new: true});
                    return {...settlement._doc, _id: settlement._id.toString()};
            } catch (error) {
                return new Error(error.message)
            }
 },
 deleteSettlement: async ({id}, req)=>{
         try {
                let settlement = await ReferredFamily.findOne({_id: id})
                if(!settlement) return new Error("Requested settlement not found!");
                settlement = await ReferredFamily.findOneAndDelete({_id: id});
                return {message: "Deleted settlement!"};
         } catch (error) {
             return new Error(error.message)
         }
 }
}