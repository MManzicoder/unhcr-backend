import { buildSchema } from "graphql";

const fundSchema = buildSchema(`
   type Fund{
       amount: Int!
       createdBy: String!
       family:String!
       createdAt:String!
   }
   input fundInput{
       amount: Int!,
       createdBy: String,
       family:String,
   }
  type  RootQuery{
        funds:[Fund!]
        fund(_id:String!):Fund!
   }
  type Mutation{
       createFund(fund:fundInput!):Fund!
       updateFund(id:String,fund:fundInput!):String!
       deleteFund(_id:String!):String!
   }
   schema{
       query:RootQuery,
       mutation:Mutation
   }
`)

export default fundSchema