import errorHandle from '../../middlewares/AsyncErrors.mjs'
import Family from '../../models/family.mjs'

const familyResolvers = {
    families: errorHandle(
        async () =>{
            const fetchedFamilies = await Family.find();
            return fetchedFamilies.map(family=>{
                return {
                    ...family._doc,
                    _id:family.id,
                    createdAt:new Date(family._doc.createdAt).toISOString()
                }
            })
        }
    ),
    family: errorHandle(
        async id =>{
                const family = await Family.findOne({_id:id});
                return {
                    ...family._doc,
                    _id:family.id,
                    createdAt:new Date(family._doc.createdAt).toISOString()
                }
        }
    ),
    createFamily: errorHandle(
        async args => {
            const {leader,children} = args.family
            const family = new Family({
                leader,children
            })
            const newFamily = await family.save();
            return {...newFamily._doc,_id:newFamily.id}
        }
    ),
    deleteFamily: errorHandle(
        async id => {
            const deletedFamily = await Family.findByIdAndDelete(id);
            return {
                ...deletedFamily._doc,
                _id: deletedFamily.id,
                createdAt: new Date(deletedFamily._doc.createdAt).toISOString(),
              }
        }
    ),
    updateFamily: errorHandle(
        async args => {
            // console.log(args);
            const { _id, family } = args
            console.log(family);
            const updatedFamily = await Family.findByIdAndUpdate(_id, family);
            return `Family ${updatedFamily.id} updated Successfully!!!`
        }
    )
}
export default familyResolvers