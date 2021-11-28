import errorHandle from '../../middlewares/AsyncErrors.mjs'
import Funds from '../../models/funds.js'

const fundResolver = {
    funds: errorHandle(
        async() => {
            const funds = await Funds.find();

            return funds.map(fund => {

                return {
                    createdAt: new Date(fund._doc.createdAt).toISOString(),
                    ...fund._doc,
                }
            })


        }
    ),
    fund: errorHandle(
        async id => {
            const fund = await Funds.findOne(id);
            return {
                id: fund._id,
                ...fund._doc,
                createdAt: new Date(fund.createdAt).toISOString()
            }
        }
    ),
    createFund: errorHandle(
        async args => {
            const { amount, family, createdBy } = args.fund;

            const newFund = await new Funds({
                amount,
                family,
                createdBy
            }).save()
            console.log(newFund)

            return {
                id: newFund.id,
                ...newFund._doc,
                createdBy: createdBy
            }
        }
    ),
    deleteFund: errorHandle(
        async id => {
            if (!id) {
                return `Please choose a fund to delete`
            }
            const deletedFund = await Funds.findByIdAndDelete(id);
            if (!deletedFund) {
                return `Fund ${id} not found!!!`
            }

            return `Fund ${deletedFund.id} deleted Successfully!!!`
        }
    ),
    updateFund: errorHandle(
        async args => {

            const { id, fund } = args;
            if (!id || !fund) {
                return `Please choose a fund to update`
            }
            const updatedFund = await Funds.findByIdAndUpdate(id, fund);
            if (!updatedFund) {
                return `Fund with this ${id} not found!!!`
            }
            return `Fund ${updatedFund.id} updated Successfully!!!`
        }
    )
}

export default fundResolver