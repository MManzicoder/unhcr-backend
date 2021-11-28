import {buildSchema} from "graphql"

export default buildSchema(`
    input SettleMentData{
        familyId: ID!
        newSettlement: String!
    }
    type SettleMent{
        _id: String!
        familyId: String!
        newSettlement: String!      
        movementDate: String!
        settled: Boolean!
    }
    type Message{
        message: String!
    }
     RootQuery{
      getNewSettlements: [SettleMent!]
     }
     RootMutation{
      registerSettlement(data: SettleMentData): Message
     }
     schema{
         query: RootQuery
         mutation: RootMutation
     }
`)